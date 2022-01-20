export default {
  ssr: false,
  srcDir: "./src",
  router: {
    mode: 'hash'
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