/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,md}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        ngsek: '#ffd019',
      },
    },
  },
  plugins: [],
}
