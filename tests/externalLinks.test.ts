import fg from 'fast-glob'
import fs from 'fs'
import axios from 'axios'

const urlPattern = /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*))/g

const ignoredUrls = [
  'http://boss.ngseke.me/',
  'https://www.linkedin.com/in/ngseke/',
  'http://www.cc.ntut.edu.tw/~wkchen/game/',
  'https://myweb.ntut.edu.tw/~yschen/',
  'https://sutian.moe.edu.tw/zh-hant/',
  'https://www.flaticon.com',
  /https:\/\/hackmd\.io\/@xq\/(.+)/,
]

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
      .filter(url => {
        return !ignoredUrls.some(ignoreUrl => {
          const pattern = new RegExp(ignoreUrl)
          return pattern.test(url)
        })
      })
  )]

  return urls
}

describe('external links', () => {
  it.each(getAllExternalUrls().map((url) => [url]))(
    '%s should be a valid link',
    async (url) => {
      const request = axios.get(url)
        .catch(reason => {
          if (reason?.response?.headers?.server !== 'cloudflare') {
            throw reason
          }
        })
      await expect(request).resolves.not.toThrowError()
    })
})
