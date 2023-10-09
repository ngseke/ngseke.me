import { VITE_OG_IMAGE_OUTPUT_PATH, VITE_SITE_ORIGIN } from '../modules/constants'
import urlJoin from 'url-join'

export const ogImageQueryKey = 'og-image'

export function useOgImage () {
  const route = useRoute()

  const ogImage = computed(() => {
    const name = route.name
    if (typeof name !== 'string') return null

    return urlJoin(
      VITE_SITE_ORIGIN,
      VITE_OG_IMAGE_OUTPUT_PATH,
      `${name}.png`,
      `?v=${__COMMIT_HASH__}`
    ).trim()
  })

  const ogImageHeadMetaList = computed(() => (
    ogImage.value
      ? [
          { property: 'og:image', content: ogImage.value },
          { property: 'og:image:width', content: 1200 },
          { property: 'og:image:height', content: 600 },
          { name: 'twitter:image', content: ogImage.value },
          { name: 'twitter:card', content: 'summary_large_image' },
        ]
      : []
  ))

  const shouldShowOgImage = computed(() => ogImageQueryKey in route.query)

  return {
    ogImage,
    ogImageHeadMetaList,
    shouldShowOgImage,
  }
}
