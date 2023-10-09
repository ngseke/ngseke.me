import { resolve } from 'path'
import { RouteRecordRaw } from 'vue-router'
import fs from 'fs-extra'
import type { Plugin } from 'vite'
import puppeteer from 'puppeteer'
import { spawnd } from 'spawnd'
import waitOn from 'wait-on'

export interface GenerateOgImageOptions {
  path: string,
  routes: RouteRecordRaw[],
}

function log (message: string) {
  console.log(`[🌌 OG IMAGE] ${message}`)
}

const root = process.cwd()

const port = 40000

export function flattenRoutes (routes: RouteRecordRaw[], parentPath = '') {
  let flatRoutes: RouteRecordRaw[] = []

  routes.forEach(route => {
    const newPath = parentPath + route.path

    if (route.children) {
      flatRoutes = flatRoutes.concat(flattenRoutes(route.children, newPath + '/'))
    }

    const newRoute = { ...route, path: newPath }
    delete newRoute.children
    flatRoutes.push(newRoute)
  })

  return flatRoutes
}

export async function generateOgImage ({
  path,
  routes,
}: GenerateOgImageOptions) {
  const start = +new Date()
  log('Start to generate og image')
  const proc = spawnd(`pnpm run dev --port ${port}`, { shell: true })
  const base = `http://localhost:${port}/`
  await waitOn({
    resources: [base],
    timeout: 30000,
    headers: { accept: 'text/html' },
  })
  await new Promise(resolve => setTimeout(resolve, 5000))
  const flattenedRoutes = flattenRoutes(routes)
  const browser = await puppeteer.launch({
    headless: 'new',
  })
  const page = await browser.newPage()

  const fullPath = resolve(root, 'dist', path)
  await fs.emptyDir(fullPath)

  for (const route of flattenedRoutes) {
    const name = String(route.name)
    if (
      !/^(project|blog)-/.test(name)
    ) continue

    const url = String(new URL(route.path, base))

    page.setViewport({
      width: 1200,
      height: 600,
      deviceScaleFactor: 2,
    })

    await page.goto(url + '?og-image')
    try {
      await page.waitForNavigation({
        waitUntil: 'networkidle0',
        timeout: 5000,
      })
    } catch (e) {
    }

    const output = resolve(fullPath, `${name}.png`)

    await page.screenshot({ path: output })
    log(output)
  }

  await browser.close()
  proc.destroy()
  const duration = (+new Date()) - start
  log(`Generated in: ${(duration / 1000).toFixed(2)}`)
}

export function OgImage ({ path }: { path: string }): Plugin {
  let vitePluginPagesApi
  let shouldGenerate = false

  return {
    name: 'generate-og-image',
    apply: 'build',
    enforce: 'post',
    buildStart ({ plugins }) {
      const pluginName = 'vite-plugin-pages'
      const plugin = plugins.find(plugin => plugin.name === pluginName)
      if (!plugin) {
        throw new Error(`This plugin depends on the "${pluginName}" plugin.`)
      }
      vitePluginPagesApi = plugin.api
    },
    async configResolved (resolvedConfig) {
      shouldGenerate = Boolean(resolvedConfig.build.ssr)
    },
    async buildEnd () {
      if (!shouldGenerate) return
      const routes: RouteRecordRaw[] = await vitePluginPagesApi.getResolvedRoutes()
      await generateOgImage({ routes, path })
    },
  }
}
