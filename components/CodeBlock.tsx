import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

const CodeBlock = ({ children }) => {
  const textareaRef = useRef(null);
  const [codeString, setCodeString] = useState('');
  const [copied, setCopied] = useState(false);  // New state variable

  useEffect(() => {
    if (textareaRef.current) {
      setCodeString(textareaRef.current.textContent || '');
    }
  }, [children]);

  const handleCopyClick = () => {
    if (codeString) {
      navigator.clipboard.writeText(codeString).then(() => {
        setCopied(true); // Set copied state to true
        setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds

        //alert('Code copied to clipboard!');
      }, () => {
        alert('Failed to copy code!');
      });
    }
  };

  return (
    <div style={{ position: 'relative', borderRadius: '5px', top: '20px' }}>
      <pre style={{ margin: 0, padding: '0px', fontSize: '1.1em' }}>
        <code ref={textareaRef} style={{fontSize: '0.9em' }}>
          {children}
        </code>
      </pre>
      <button 
        onClick={handleCopyClick} 
        style={{
          position: 'absolute', 
          top: '10px', 
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '0.5em',
          transition: 'color 0.3s',
        }}
        //onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.color = '#007bff'}
        //onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.color = 'black'}
      >
        <FontAwesomeIcon 
            icon={copied ? faCheck : faCopy}
            size="2x" 
            style={{ opacity: 0.5 }}
            onMouseOver={(e: React.MouseEvent<SVGSVGElement>) => e.currentTarget.style.opacity = '1'}
            onMouseOut={(e: React.MouseEvent<SVGSVGElement>) => e.currentTarget.style.opacity = '0.5'}
        />
      </button>
    </div>
  );
};

export default CodeBlock;
