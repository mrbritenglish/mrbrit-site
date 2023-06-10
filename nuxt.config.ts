// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-icon',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: true,
          Lato: true,
          Montserrat: true,
          download: true,
          inject: true,
        },
      },
    ],
  ],
});
