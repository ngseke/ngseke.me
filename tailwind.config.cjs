/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        ngsek: '#ffd019',
      },
      animation: {
        blink: 'blink .08s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '0%' },
        },
      },
    },
  },
  plugins: [],
}
