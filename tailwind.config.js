/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './features/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './common/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        primary: '0px 1px 2px rgba(133, 140, 148, 0.05)',
        secondary: '0px 4px 30px rgba(133, 140, 148, 0.05)',
        popup: '2px 6px 23px rgba(133, 140, 148, 0.2)',
      },
      colors: {
        primary: {
          purple: '#7166F9',
        },
        'dark-blue': '#2B2F42',
        icon: '#9FA7D0',
        background: '#F6F6FB',
        'light-blue-grey': '#DFE6EF',
        'dark-blue-grey': '#D1DDEB',
      },
      borderWidth: {
        6: '6px',
      },
      dropShadow: {
        normal: '0px 0px 0px rgb(0 0 0 / 50%)',
      },
      textShadow: {
        normal: '0px 0px 1px rgb(0 0 0 / 50%), 0px 0px 1px rgb(1 0 5 / 10%)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
