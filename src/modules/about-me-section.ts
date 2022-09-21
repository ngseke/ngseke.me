import scrollToElement from 'scroll-to-element'

type Options = Partial<Parameters<typeof scrollToElement>[1]>

export const aboutMeSectionId = 'about' as const
export const aboutMeSectionSelector = `#${aboutMeSectionId}` as const
export const aboutMeSectionHash = `#${aboutMeSectionId}` as const

export function scrollToAboutMe (options?: Options) {
  scrollToElement(aboutMeSectionSelector, {
    offset: -64,
    duration: 300,
    ...options,
  })
}
