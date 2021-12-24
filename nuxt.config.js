export default {
  ssr: false,
  srcDir: "./src",
  router: {
    mode: 'hash'
  },
  modules: [
    'bootstrap-vue/nuxt',
    '../lib'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
}