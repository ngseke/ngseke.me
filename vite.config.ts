/// <reference types="vite-ssg" />

import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import fs from 'fs-extra'
import matter from 'gray-matter'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Shiki from 'markdown-it-shiki'
import generateSitemap from 'vite-ssg-sitemap'

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  ssgOptions: {
    onFinished: () => generateSitemap({
      hostname: loadEnv(mode, process.cwd()).VITE_SITE_ORIGIN,
      exclude: [
        '/404',
        '/projects',
        '/project/emo',
        '/project/typingtyping',
        '/project/camp2017',
      ],
    }),
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    AutoImport({
      dts: true,
      eslintrc: { enabled: true },
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        {
          '@vueuse/core': [
            'isClient',
          ],
        },
      ],
    }),
    Components({
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    eslint(),
    checker({ typescript: true, vueTsc: true }),
    Pages({
      extensions: ['vue', 'md'],
      extendRoute (route) {
        const path = resolve(__dirname, route.component.slice(1))
        if (/(project|blog)\/(.+).md/.test(path)) {
          const name = path.split(/(project|blog)\/(.+).md/)[1]

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
    Markdown({
      markdownItSetup (md) {
        md.use(Shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        })
      },
    }),
    vueJsx({}),
  ],
})
