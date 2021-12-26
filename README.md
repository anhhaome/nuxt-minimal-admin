# Nuxt Minimal Admin

## Install

```bash
npm install --save nuxt-minimal-admin
```

## Config

In `nuxt.config.js`, you must install `bootstrap-vue` and `nuxt-minimal-admin` by:

```js
{
  ...
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-minimal-admin'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
  ...
}
```

## Components

- `n-default-layout`
- `n-login-form`

## Methods

- `this.$noti(type, message)`

## Classes

- `m-container`
- `m-panel`
- `m-table`

## License

MIT