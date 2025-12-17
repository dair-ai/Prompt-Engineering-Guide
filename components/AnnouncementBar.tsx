import React from 'react';
import Link from 'next/link';

const AnnouncementBar: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#8b5cf6',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '0.9rem',
        borderBottom: '1px solid #7c3aed',
      }}
    >
      🚀 Master building AI workflows and agents with Claude Code! Use <strong style={{ fontWeight: 'bold' }}>AGENTX20</strong> for 20% off{' '}
      <Link
        href="https://dair-ai.thinkific.com/courses/claude-code-for-everyone-2"
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
