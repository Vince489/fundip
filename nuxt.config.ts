// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    plugins: ['~/server/index.ts'],
  },

  runtimeConfig: {
    // Will be available in both server and client
    mongodbUri: process.env.MONGODB_URI
  }

})
