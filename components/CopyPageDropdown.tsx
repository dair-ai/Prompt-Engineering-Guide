import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CopyPageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMarkdownModal, setShowMarkdownModal] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'success'>('idle');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const router = useRouter();

  // Helper to get hover background color based on theme
  const getHoverBg = (buttonId: string) => {
    if (hoveredButton !== buttonId) return 'transparent';
    // Check if dark mode (this works with Nextra's dark mode)
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
  };

  // Get current page path
  const getPagePath = (): string => {
    const pathname = router.pathname;
    // Convert route path to file path (e.g., /guides/deep-research -> guides/deep-research.en.mdx)
    const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '');

    // Check if the path already ends with .en - if so, just add .mdx
    if (cleanPath.endsWith('.en')) {
      return `${cleanPath}.mdx`;
    }

    // Otherwise add .en.mdx
    return `${cleanPath}.en.mdx`;
  };

  // Cross-platform copy function with mobile fallback
  const copyToClipboard = async (text: string): Promise<void> => {
    // Try modern Clipboard API first (works in HTTPS contexts)
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {
        console.warn('Clipboard API failed, trying fallback:', error);
      }
    }

    // Enhanced fallback for mobile browsers
    return new Promise<void>((resolve, reject) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;

      // Position off-screen but keep it in viewport for mobile compatibility
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.width = '1px';
      textArea.style.height = '1px';
      textArea.style.padding = '0';
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.style.fontSize = '16px'; // Prevent iOS zoom
      textArea.style.opacity = '0';
      textArea.style.pointerEvents = 'none';

      // Don't use readonly - it prevents selection on some mobile browsers
      document.body.appendChild(textArea);

      // Focus and select
      textArea.focus();

      const isIOS = /ipad|iphone/i.test(navigator.userAgent);

      if (isIOS) {
        // iOS-specific handling
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        textArea.setSelectionRange(0, text.length);
      } else {
        // Standard selection for Android and others
        textArea.select();
        textArea.setSelectionRange(0, text.length);
      }

      // Wait a bit for selection to take effect on mobile
      setTimeout(() => {
        try {
          const successful = document.execCommand('copy');

          // Clean up after a short delay
          setTimeout(() => {
            document.body.removeChild(textArea);
          }, 100);

          if (successful) {
            resolve();
          } else {
            reject(new Error('Copy command was unsuccessful'));
          }
        } catch (error) {
          document.body.removeChild(textArea);
          reject(error);
        }
      }, 100);
    });
  };

  // Fetch page content from API
  const fetchPageContent = async (): Promise<string> => {
    const pagePath = getPagePath();
    console.log('Fetching page path:', pagePath);
    const response = await fetch(`/api/getPageContent?pagePath=${encodeURIComponent(pagePath)}`);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error(errorData.error || 'Failed to fetch page content');
    }

    const data = await response.json();
    return data.content;
  };

  // Handle Copy as Markdown
  const handleCopyAsMarkdown = async () => {
    try {
      setCopyStatus('copying');
      const content = await fetchPageContent();
      await copyToClipboard(content);
      setCopyStatus('success');
      setTimeout(() => {
        setCopyStatus('idle');
        setIsOpen(false);
      }, 1500);
    } catch (error) {
      console.error('Failed to copy:', error);
      setCopyStatus('idle');
      const errorMessage = error instanceof Error ? error.message : 'Failed to copy content';
      alert(errorMessage);
    }
  };

  // Handle View as Markdown
  const handleViewAsMarkdown = async () => {
    try {
      const content = await fetchPageContent();
      setMarkdownContent(content);
      setShowMarkdownModal(true);
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to fetch content:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to load content';
      alert(errorMessage);
    }
  };

  // Handle Open in Claude
  const handleOpenInClaude = () => {
    const currentUrl = window.location.origin + router.asPath;
    // Convert .html or route to .md for Claude
    const mdUrl = currentUrl.replace(/\.html$/, '.md');
    const prompt = `Read from ${mdUrl} so I can ask questions about it.`;
    const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
    window.open(claudeUrl, '_blank');
    setIsOpen(false);
  };

  // Handle Open in ChatGPT
  const handleOpenInChatGPT = () => {
    const currentUrl = window.location.origin + router.asPath;
    const mdUrl = currentUrl.replace(/\.html$/, '.md');
    const prompt = `Read from ${mdUrl} so I can ask questions about it.`;
    const chatGPTUrl = `https://chatgpt.com/?prompt=${encodeURIComponent(prompt)}`;
    window.open(chatGPTUrl, '_blank');
    setIsOpen(false);
  };

  // Copy markdown from modal
  const handleCopyFromModal = async () => {
    try {
      await copyToClipboard(markdownContent);
      alert('Content copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy content');
    }
  };

  return (
    <>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800 nx-border nx-border-gray-200 dark:nx-border-neutral-700"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            backgroundColor: 'transparent',
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: 500,
            cursor: 'pointer',
            color: 'inherit',
            transition: 'all 0.2s ease',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy page
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {isOpen && (
          <div
            className="nx-bg-white dark:nx-bg-neutral-900 nx-border nx-border-gray-200 dark:nx-border-neutral-700"
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '4px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              minWidth: '240px',
              zIndex: 50,
              overflow: 'hidden',
            }}
          >
            <button
              onClick={handleCopyAsMarkdown}
              disabled={copyStatus === 'copying'}
              onMouseEnter={() => setHoveredButton('copy')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 12px',
                backgroundColor: getHoverBg('copy'),
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                cursor: copyStatus === 'copying' ? 'wait' : 'pointer',
                textAlign: 'left',
                color: 'inherit',
                transition: 'background-color 0.15s ease',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <div>
                <div style={{ fontWeight: 500 }}>
                  {copyStatus === 'success' ? 'Copied!' : 'Copy page'}
                </div>
                <div className="nx-text-gray-500 dark:nx-text-gray-400" style={{ fontSize: '0.75rem' }}>
                  Copy page as Markdown for LLMs
                </div>
              </div>
            </button>

            <button
              onClick={handleOpenInClaude}
              onMouseEnter={() => setHoveredButton('claude')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 12px',
                backgroundColor: getHoverBg('claude'),
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                cursor: 'pointer',
                textAlign: 'left',
                color: 'inherit',
                transition: 'background-color 0.15s ease',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 1200 1200"
                fill="#d97757"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z" />
              </svg>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>Open in Claude</div>
                <div className="nx-text-gray-500 dark:nx-text-gray-400" style={{ fontSize: '0.75rem' }}>
                  Ask questions about this page
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.5 }}
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>

            <button
              onClick={handleOpenInChatGPT}
              onMouseEnter={() => setHoveredButton('chatgpt')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 12px',
                backgroundColor: getHoverBg('chatgpt'),
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                cursor: 'pointer',
                textAlign: 'left',
                color: 'inherit',
                transition: 'background-color 0.15s ease',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 320 320"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z" />
              </svg>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>Open in ChatGPT</div>
                <div className="nx-text-gray-500 dark:nx-text-gray-400" style={{ fontSize: '0.75rem' }}>
                  Ask questions about this page
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.5 }}
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Markdown Modal */}
      {showMarkdownModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px',
          }}
          onClick={() => setShowMarkdownModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                padding: '20px',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>
                Page Markdown
              </h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleCopyFromModal}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#8b5cf6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#7c3aed';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#8b5cf6';
                  }}
                >
                  Copy
                </button>
                <button
                  onClick={() => setShowMarkdownModal(false)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: 'transparent',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Close
                </button>
              </div>
            </div>
            <div
              style={{
                padding: '20px',
                overflow: 'auto',
                flex: 1,
              }}
            >
              <pre
                style={{
                  margin: 0,
                  padding: '16px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {markdownContent}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default CopyPageDropdown;
