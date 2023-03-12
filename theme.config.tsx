import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 206 246" fill="none">
        <circle cx="40" cy="40" r="40" fill="currentColor"/>
        <circle cx="40" cy="206" r="40" fill="currentColor"/>
        <circle cx="166" cy="120" r="40" fill="currentColor"/>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Prompt Engineering Guide
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/dair-ai/Prompt-Engineering-Guide',
  },
  chat: {
    link: 'https://discord.gg/SKgkVT8BGJ',
  },
  docsRepositoryBase: 'https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/',
  footer: {
    text: 'Copyright © 2023 DAIR.AI',
  },
}

export default config
