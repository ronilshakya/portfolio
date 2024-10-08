/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "heading": ['Inter Tight', 'sans-serif'],
        "body" : ['Instrument Sans', 'sans-serif'],
      },
      colors:{
        "custom-light-border": 'rgba(0, 0, 0, 0.16)',
        "custom-dark-border": '#161616',
        "customDark": 'rgb(15, 15, 15)',
      }
    },
  },
  plugins: [],
}