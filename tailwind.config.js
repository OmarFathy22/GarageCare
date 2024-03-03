/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': { 'max': '350px' },
      'sm': {  'max': '600px' },
      'min-600': {  'min': '600px' },
      'max-900': {  'max': '900px' },
      'min-900': {  'min': '900px' },
      'max-1200': {  'max': '1200px' },
      'min-1200': {  'min': '1200px' },
      'max-1300': {  'max': '1300px' },
      'min-1300': {  'min': '1300px' },
      'min-1400': {  'min': '1400px' },
    },
  },
  plugins: [],
};
