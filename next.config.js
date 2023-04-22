const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh', 'jp', 'pt', 'tr', 'es', 'it', 'fr', 'kr'],
    defaultLocale: 'en',
  },
})
