/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue-400': '#abdbe3',
        'primary-blue-300': '#abdbe3',
        'primary-blue-200': '#abdbe3',
        'primary-blue-100': '#abdbe3',
        'primary-red-400': '#abdbe3',
        'primary-red-300': '#abdbe3',
        'primary-red-200': '#abdbe3',
        'primary-red-100': '#abdbe3',
        'primary-yellow': '#000000',
        'secondary-violet': '#000000',
        'secondary-green': '#000000',
        'secondary-blue': '#000000',
        'secondary-pink': '#000000',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
