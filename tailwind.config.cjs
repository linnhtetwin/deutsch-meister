/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        gothic: ['UnifrakturMaguntia', 'cursive'],
      },
      colors: {
        'de-black': '#000000',
        'de-red': '#DD0000',
        'de-gold': '#FFCE00',
        dativ: '#005f73',
        akk: '#ae2012',
        genitiv: '#8e44ad',
        wechsel: '#d35400',
        prep: '#16a085',
        'art-der': '#2b6cb0',
        'art-die': '#c0392b',
        'art-das': '#27ae60',
      },
    },
  },
  plugins: [],
};
