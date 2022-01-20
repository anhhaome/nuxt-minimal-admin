const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./lib/**/*.{js,vue,ts}",
    "./src/**/*.{js,vue,ts}"
  ],
  theme: {
    extends: [],
    fontFamily: {
      'sans': ['"Quicksand"'],
    }
  },
  plugins: [
    plugin(function({ addBase, addVariant, theme }) {
      addVariant('m-active', '&[active]');

      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), fontFamily: 'Josefin Sans' },
        'h2': { fontSize: theme('fontSize.xl'), fontFamily: 'Josefin Sans' },
        'h3': { fontSize: theme('fontSize.lg'), fontFamily: 'Josefin Sans' },
      });
    }),
  ],
}
