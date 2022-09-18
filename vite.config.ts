import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    eslint(),
    checker({ typescript: true, vueTsc: true }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Markdown(),
  ],
})
