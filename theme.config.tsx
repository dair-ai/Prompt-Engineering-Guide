import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { Pre } from './components/pre'
import CopyPageDropdown from './components/CopyPageDropdown'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 206 246" fill="none">
        <circle cx="40" cy="40" r="40" fill="currentColor"/>
        <circle cx="40" cy="206" r="40" fill="currentColor"/>
        <circle cx="166" cy="120" r="40" fill="currentColor"/>
      </svg>
      <span className="logo-text" style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Prompt Engineering Guide
      </span>
    </>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
    { locale: 'jp', text: '日本語'},
    { locale: 'pt', text: 'Português' },
    { locale: 'it', text: 'Italian' },
    { locale: 'tr', text: 'Türkçe' },
    { locale: 'es', text: 'Español' },
    { locale: 'fr', text: 'Français' },
    { locale: 'kr', text: '한국어' },
    { locale: `ca`, text: `Català` },
    { locale: 'fi', text: 'Finnish' },
    { locale: 'ru', text: 'Русский' },
    { locale: 'de', text: 'Deutsch' },
    { locale: 'ar', text: 'العربية' },
  ],
  head: function UseHead() {
    const { title } = useConfig()
    return (
    <>
      <title>{title ? title + ' | Prompt Engineering Guide': 'Prompt Engineering Guide'} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Prompt Engineering Guide" />
      <meta property="og:description" content="A Comprehensive Overview of Prompt Engineering" />
      <meta
          name="og:title"
          content={title ? title + ' | Prompt Engineering Guide' : 'Prompt Engineering Guide'}
        />
      <link rel="icon" href="/144-favicon.svg" type="image/svg+xml" />

        <link
          rel="icon"
          href="/144-favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
    </>
  )},
  project: {
    link: 'https://github.com/dair-ai/Prompt-Engineering-Guide',
  },
  chat: {
    link: 'https://discord.gg/YbMT8k6GfX',
  },
  docsRepositoryBase: 'https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/',
  footer: {
    text: (
      <div>Copyright © 2026 DAIR.AI</div>
    ),
  },
  search: {
    placeholder: 'Search...',
  },
  gitTimestamp: ({ timestamp }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <div>Last updated on {timestamp.toDateString()}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Sponsored by</span>
        <a href="https://serpapi.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cdn.rawgit.com/standard/standard/master/docs/logos/serpapi.png" 
            alt="SerpAPI" 
            style={{ height: '24px', width: 'auto', verticalAlign: 'middle' }}
          />
        </a>
      </div>
    </div>
  ),
  components: {
    pre: Pre,
  },
  main: ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    // Only show on English pages (not index page)
    const isEnglishPage = router.locale === 'en' && router.pathname !== '/';

    return (
      <>
        {isEnglishPage && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '16px',
            position: 'relative',
            zIndex: 10,
            maxWidth: '100%'
          }}>
            <CopyPageDropdown />
          </div>
        )}
        {children}
      </>
    ) as React.ReactElement;
  },
  navbar: {
    extraContent: (
      <a
        href="/services"
        style={{
          padding: '6px 16px',
          backgroundColor: '#8b5cf6',
          color: 'white',
          borderRadius: '6px',
          fontWeight: 600,
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'all 0.2s ease',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#7c3aed'
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#8b5cf6'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        ✨ Services
      </a>
    )
  },
}

export default config
