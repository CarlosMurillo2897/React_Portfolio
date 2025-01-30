/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: 'tw-',
  theme: {
    // TODO: Create media queries based on common media defined on app, i.e.: 2000px.
    // TODO: Add dark mode.
    colors: {
      'primary': '#edf2f8',
      'secondary': '#313bac',
      'black': '#030303',
      'light-gray': '#e4e4e4',
      'gray': '#6b7688',
      'brown': '#46364a',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}