// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt', 'nuxt-swiper'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  runtimeConfig: {
    apiSecret: process.env.CURRENCY_API_KEY,
    public: {
      apiSecret: process.env.CURRENCY_API_KEY,
      apiBase: process.env.BASE_URL,
    },
  },
});
