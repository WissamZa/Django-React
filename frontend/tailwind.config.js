/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx}', // React source files
    '../static/**/*.{js,jsx}', // React source files
    '../templates/**/*.html' // Django templates
  ],

  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};