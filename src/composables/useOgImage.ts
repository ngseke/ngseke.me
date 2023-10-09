import { VITE_OG_IMAGE_OUTPUT_PATH, VITE_SITE_ORIGIN } from '../modules/constants'
import urlJoin from 'url-join'

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
    )
  })

  return {
    ogImage,
  }
}
