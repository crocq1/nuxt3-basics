export const i18n = {
  baseUrl: process.env.FRONTEND_URL,
  locales: [
    {
      code: 'fr',
      name: 'Français',
      language: 'fr-FR',
      file: 'fr.json',
    },
    {
      code: 'en',
      name: 'English',
      language: 'en-US',
      file: 'en.json',
    },
  ],
  defaultLocale: 'fr',
  detectBrowserLanguage: false,
  strategy: 'prefix_except_default',
  lazy: true,
  langDir: 'locales',
  vueI18n: 'vue-i18n.config',
}
