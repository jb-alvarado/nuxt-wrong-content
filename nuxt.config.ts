// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    ssr: false,

  //   nitro: {
  //     devProxy: {
  //         '/api': { target: 'http://127.0.0.1:8080' },
  //     },
  // },

    modules: ['@nuxt/eslint'],
})
