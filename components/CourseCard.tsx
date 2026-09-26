'use client'

import React, { useEffect, useState } from 'react'

interface CourseCardProps {
  tag: string
  tagColor?: 'blue' | 'green' | 'purple' | 'orange'
  title: string
  description: string
  href: string
  level?: string
  duration?: string
  isFree?: boolean
}

const tagColors = {
  blue: {
    bg: '#dbeafe',
    darkBg: '#1e3a5f',
    text: '#1e40af',
    darkText: '#93c5fd',
    border: '#93c5fd',
    darkBorder: '#3b82f6'
  },
  green: {
    bg: '#ecfccb',
    darkBg: '#1a2e05',
    text: '#365314',
    darkText: '#bef264',
    border: '#bef264',
    darkBorder: '#84cc16'
  },
  purple: {
    bg: '#f3e8ff',
    darkBg: '#2e1065',
    text: '#6b21a8',
    darkText: '#d8b4fe',
    border: '#d8b4fe',
    darkBorder: '#a855f7'
  },
  orange: {
    bg: '#ffedd5',
    darkBg: '#431407',
    text: '#9a3412',
    darkText: '#fdba74',
    border: '#fdba74',
    darkBorder: '#f97316'
  }
}

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  return isDark
}

export const CourseCard = ({
  tag,
  tagColor = 'blue',
  title,
  description,
  href,
  level,
  duration,
  isFree
}: CourseCardProps) => {
  const isDark = useDarkMode()
  const colors = tagColors[tagColor]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        backgroundColor: isDark ? '#1e293b' : 'white',
        borderRadius: '12px',
        border: `1px solid ${isDark ? '#334155' : '#e5e7eb'}`,
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.05)',
        height: '100%'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = isDark ? '0 4px 12px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.1)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = isDark ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.05)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Colored tag bar */}
      <div
        style={{
          backgroundColor: isDark ? colors.darkBg : colors.bg,
          borderBottom: `2px solid ${isDark ? colors.darkBorder : colors.border}`,
          padding: '8px 16px',
          fontSize: '12px',
          fontWeight: 600,
          color: isDark ? colors.darkText : colors.text,
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
      >
        {tag}
      </div>

      {/* Card content */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        <h3
          style={{
            margin: '0 0 12px 0',
            fontSize: '18px',
            fontWeight: 700,
            color: isDark ? '#f1f5f9' : '#111827',
            lineHeight: 1.3
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: '0',
            fontSize: '14px',
            color: isDark ? '#94a3b8' : '#6b7280',
            lineHeight: 1.6,
            flex: 1
          }}
        >
          {description}
        </p>

        {/* Metadata footer */}
        {(level || duration) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '12px',
              marginTop: '16px',
              borderTop: `1px dashed ${isDark ? '#475569' : '#e5e7eb'}`,
              fontSize: '13px',
              color: isDark ? '#94a3b8' : '#6b7280'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20V10M18 20V4M6 20v-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{level}</span>
            </div>
            {duration && (
              <span style={{ fontWeight: 500 }}>{duration}</span>
            )}
          </div>
        )}
      </div>
    </a>
  )
}

interface CoursesSectionProps {
  title?: string
  children: React.ReactNode
}

export const CoursesSection = ({
  title = "Related Learning",
  children
}: CoursesSectionProps) => {
  const isDark = useDarkMode()

  return (
    <div
      style={{
        backgroundColor: isDark ? '#0f172a' : '#f8fafc',
        borderRadius: '16px',
        padding: '24px',
        marginTop: '32px',
        border: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`
      }}
    >
      <h2
        style={{
          margin: '0 0 20px 0',
          fontSize: '20px',
          fontWeight: 700,
          color: isDark ? '#f1f5f9' : '#1e293b'
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Single card variant for inline use
export const CoursePromo = ({
  title = "Want to learn more?",
  description = "Learn more about advanced prompt engineering techniques and best practices in our AI courses.",
  href = "https://academy.dair.ai/",
  buttonText = "Explore Courses",
  promoCode
}: {
  title?: string
  description?: string
  href?: string
  buttonText?: string
  promoCode?: string
}) => {
  const isDark = useDarkMode()

  return (
    <div
      style={{
        backgroundColor: isDark ? '#0f172a' : '#f8fafc',
        borderRadius: '12px',
        padding: '24px',
        marginTop: '24px',
        border: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <div
          style={{
            backgroundColor: isDark ? '#1e3a5f' : '#dbeafe',
            borderRadius: '10px',
            padding: '12px',
            flexShrink: 0
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#60a5fa' : '#2563eb'} strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: '0 0 8px 0',
              fontSize: '18px',
              fontWeight: 700,
              color: isDark ? '#f1f5f9' : '#1e293b'
            }}
          >
            {title}
          </h3>

          <p
            style={{
              margin: '0 0 16px 0',
              fontSize: '14px',
              color: isDark ? '#94a3b8' : '#64748b',
              lineHeight: 1.6
            }}
          >
            {description}
            {promoCode && (
              <span style={{ display: 'block', marginTop: '8px', fontWeight: 500, color: isDark ? '#cbd5e1' : '#475569' }}>
                Use code <code style={{
                  backgroundColor: isDark ? '#78350f' : '#fef3c7',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  color: isDark ? '#fcd34d' : '#92400e'
                }}>{promoCode}</code> for 20% off!
              </span>
            )}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1d4ed8'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb'
            }}
          >
            {buttonText}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
