/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
