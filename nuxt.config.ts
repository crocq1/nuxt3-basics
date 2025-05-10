// https://nuxt.com/docs/api/configuration/nuxt-config
import { i18n } from './config'

export default defineNuxtConfig({
  srcDir: 'src/',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: true,
      extensions: [".vue"],
    }
  ],

  /* Pages to ignore from build. */
  ignore: [],

  /* Plugins are auto-registered in Nuxt3, this is only for ordering purposes. */
  plugins: [],

  runtimeConfig: {
    public: {
      FRONTEND_URL: process.env.FRONTEND_URL,
    },
  },

  modules: [
    ['@nuxtjs/i18n', i18n],
    '@nuxt/image',
  ],
})
