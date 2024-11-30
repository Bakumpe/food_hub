/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/styles.css.{html, js}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ff6363",
        secondary: {
          100: "#e2e205",
          200: "#888883"
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

