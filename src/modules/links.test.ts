import { links } from './links'

const mailToPrefix = 'mailto:'

describe('links', () => {
  const urls = Object.values(links)
    .map(({ url }) => url)
    .filter((url) => !url.startsWith(mailToPrefix))

  it.each(urls.map((url) => [url]))(
    '`%s` should be a valid link',
    async (url) => {
      const page = await browser.newPage()
      const response = await page.goto(url)
      const status = String(response?.status())
      const validPattern = /^2/

      expect(status).toMatch(validPattern)

      await page.close()
    })
})
