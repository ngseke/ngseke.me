import type { Config } from 'jest'

const config: Config = {
  preset: './jestPreset.cjs',
  setupFilesAfterEnv: ['expect-puppeteer'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      isolatedModules: true,
    }],
  },
  testTimeout: 20000,
}

export default config
