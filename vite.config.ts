import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs-extra'
import matter from 'gray-matter'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    eslint(),
    checker({ typescript: true, vueTsc: true }),
    Pages({
      extensions: ['vue', 'md'],
      extendRoute (route) {
        const path = resolve(__dirname, route.component.slice(1))
        if (/project\/(.+).md/.test(path)) {
          const name = path.split(/project\/(.+).md/)[1]

          const md = fs.readFileSync(path, 'utf-8')
          const { data } = matter(md)
          data.name = name
          route.meta = {
            ...(route.meta || {}),
            frontmatter: data,
          }
        }

        return route
      },
    }),
    Markdown({}),
    vueJsx({}),
  ],
})
