export default {
  ssr: false,
  target: 'static',
  srcDir: "./src",
  router: {
    base: '/nuxt-minimal-admin/'
  },
  buildModules: [
    '@nuxt/postcss8',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  modules: [
    '../lib'
  ]
}