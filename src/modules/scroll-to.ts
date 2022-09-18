import scrollToElement from 'scroll-to-element'

type Options = Partial<Parameters<typeof scrollToElement>[1]>

export function scrollToAboutMe (options?: Options) {
  scrollToElement('#about', {
    offset: -64,
    duration: 300,
    ...options,
  })
}
