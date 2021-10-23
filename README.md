# Nuxt Minimal Admin

## Install

```bash
npm install --save nuxt-minimal-admin
```

## Config

In `nuxt.config.js`, you must install `bootstrap-vue` by:

```js
{
  ...
  modules: [
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
  ...
}
```

After that, using `nuxt-minimal-admin` as a plugin.

```js
{
  ...
  plugins: [
    { src: 'node_modules/nuxt-minimal-admin/index.js'}
  ]
  ...
}
```

## License

MIT