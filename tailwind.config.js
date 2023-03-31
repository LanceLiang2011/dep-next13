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
        heading: '#485967',
        subheading: '#7d96aa',
        body: '#1a1a1a',
        button: '#1a1a1a',
        'button-hover': '#85696e',
        'bg-hover': '#FDE5FC',
        'button-back': '#D2E2ED',
        'button-text': '#767676',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
