export default {
  ssr: false,
  srcDir: "./src",
  router: {
    mode: 'hash'
  },
  modules: [
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  plugins: [
    { src: '../lib/index.js'}
  ]
}