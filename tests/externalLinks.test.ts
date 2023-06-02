import fg from 'fast-glob'
import fs from 'fs'
import axios from 'axios'

const urlPattern = /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*))/g

const ignoreUrls = new Set([
  'http://boss.ngseke.me/',
  'https://www.linkedin.com/in/ngseke/',
  'http://www.cc.ntut.edu.tw/~wkchen/game/',
  'https://myweb.ntut.edu.tw/~yschen/',
  'https://hackmd.io/@xq/webpack-config-esm',
  'https://hackmd.io/@xq/as-const',
  'https://hackmd.io/@xq/component-naming-reversely',
  'https://hackmd.io/@xq/check-if-key-exist',
  'https://hackmd.io/@xq/bootstrap-with-nuxt',
])

const getAllExternalUrls = () => {
  const fileNames = fg.sync(
    ['**/*.{ts,js,json,md}'],
    { ignore: ['**/node_modules/**', 'dist'] }
  )
  const contents = fileNames.map((fileName) => fs.readFileSync(fileName, 'utf8'))

  const allContent = contents.join('\n')

  const urls = [...new Set(
    allContent
      .split(urlPattern)
      .filter(url => urlPattern.test(url))
      .filter(url => !ignoreUrls.has(url))
  )]

  return urls
}

describe('external links', () => {
  it.each(getAllExternalUrls().map((url) => [url]))(
    '%s should be a valid link',
    async (url) => {
      const request = axios.get(url)
      await expect(request).resolves.not.toThrowError()
    })
})
