import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const AnnouncementBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Watch for Nextra's mobile menu state by observing body classes
    const observer = new MutationObserver(() => {
      // Nextra adds nx-overflow-hidden class to body when menu is open
      const hasOverflowHidden = document.body.classList.contains('nx-overflow-hidden');
      setIsMenuOpen(hasOverflowHidden);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="announcement-bar"
      style={{
        width: '100%',
        backgroundColor: '#8b5cf6',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 500,
        borderBottom: '1px solid #7c3aed',
        display: isMenuOpen ? 'none' : 'block',
      }}
    >
      🚀 Learn to build apps with Claude Code! Use <strong style={{ fontWeight: 800, backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>PROMPTING</strong> for 20% off{' '}
      <Link
        href="https://academy.dair.ai/courses/build-apps-with-claude-code"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginLeft: '8px',
          padding: '6px 16px',
          backgroundColor: 'white',
          color: '#8b5cf6',
          fontWeight: 'bold',
          textDecoration: 'none',
          borderRadius: '20px',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#f3f4f6';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Enroll now →
      </Link>
    </div>
  );
};

export default AnnouncementBar;
