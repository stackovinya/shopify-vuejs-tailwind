/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**", "./layout/**", "./sections/**", "./snippets/**", "./deleted/**"],
  theme: {
    container: { center: true },//container ends
    extend: {
      fontSize: {
        '2xs': '0.70rem',
      },//fontSizes ends
      colors: {
        primary: '#1f68f5', secondary: '#E6F1FD', white: '#ffffff', black: '#1a1a1a'
      },//colors ends
    },
  },//theme ends
  plugins: [],
}
