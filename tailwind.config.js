const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ["application/**/*.php"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
