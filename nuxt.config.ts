// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
                 
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-aos',
  ],
  plugins: [
   { src: '~/plugins/scroll.js', mode: 'client' }


  ],
});