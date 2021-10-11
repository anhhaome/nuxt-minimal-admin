export default {
  ssr: false,
  router: {
    mode: 'hash'
  },
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  css: [
    '@/assets/scss/main.scss'
  ]
}