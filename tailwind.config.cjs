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
        light: 'hsl(0, 0%, 90%)',
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
