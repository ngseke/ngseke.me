/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false' ? 'new' : false,
  },
  server: {
    command: 'pnpm run dev',
    port: 5173,
    launchTimeout: 30000,
  },
}
