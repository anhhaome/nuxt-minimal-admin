# Nuxt Minimal Admin

## Demo

You can try a demo at: [anhhao.me/nuxt-minimal-admin](https://git.anhhao.me/nuxt-minimal-admin/)

## Install

Install following packages:

```bash
npm install --save nuxt-minimal-admin tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8 @tailwindcss/typography sass sass-loader@10
```

Create `tailwind.config.js` file with content:

```js
const defaultConfig = require('nuxt-minimal-admin/tailwind.config');

module.exports = {
  ...defaultConfig,
  content: [
    './node_modules/nuxt-minimal-admin/lib/**/*.{js,vue,ts}',
    './comps/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}'
  ]
}

```

Append `nuxt.config.js`:

```js
{
  /* ... */

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
    'nuxt-minimal-admin'
  ]

  /* ... */
}
```

Add the Tailwind to CSS `./assets/css/main.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import CSS to `nuxt.config.js`

```js
{
  /* ... */
  css: [ '@/assets/css/main.css' ],
  /* ... */
}
```

## Api

### Components

**m-default-layout**

**m-login-form**

**m-panel**

**m-button**

**m-input**

**m-checkbox-group**

**m-checkbox-control**

**m-checkbox**

### Classes

- `primary`
- `secondary`
- `info`
- `success`
- `danger` or `error`
- `warning`
- `alert`

### Utilities

- `$loader.start()`
- `$loader.end()`
- `$noti(type, message)`

## License

MIT