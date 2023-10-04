const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh', 'jp', 'pt', 'tr', 'es', 'it', 'fr', 'kr', 'ca', 'fi', 'ru'],
    defaultLocale: 'en',
  },
})
