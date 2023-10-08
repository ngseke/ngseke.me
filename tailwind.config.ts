import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
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
        sans: ['"Barlow Semi Condensed"', '"Noto Sans TC"', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        ngsek: '#ffd019',
        black: colors.neutral,
      },
    },
  },
  plugins: [],
} satisfies Config
