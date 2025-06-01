import React from 'react';
import Link from 'next/link';

const AnnouncementBar: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#f5f5f5', // Light red background
        color: 'black', // Darker red text
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '0.9rem',
        borderBottom: '1px solid #fcc',
      }}
    >
      🚀 Master Prompt Engineering and building AI Agents in our NEW courses! Use <strong style={{ fontWeight: 'bold' }}>PROMPTING20</strong> for 20% off ➜{' '}
      <Link
        href="https://dair-ai.thinkific.com/courses/building-ai-agents"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'black',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
      >
        Enroll now
      </Link>
    </div>
  );
};

export default AnnouncementBar;
