module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}