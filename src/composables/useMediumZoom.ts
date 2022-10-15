import { useStyleTag } from '@vueuse/core'
import mediumZoom from 'medium-zoom'
import useDark from './useDark'

export default function useMediumZoom (selector = '*:not(a) > img') {
  onMounted(() => {
    if (!isClient) return
    const zoom = mediumZoom(selector, {
      margin: 16,
    })

    onBeforeUnmount(() => zoom.detach())

    watch(useDark(), async (isDark) => {
      await nextTick()
      zoom.update({ background: isDark ? '#1B1917' : '#fff' })
    }, { immediate: true })
  })

  useStyleTag(`
    .medium-zoom-overlay {
      z-index: 100;
    }

    .medium-zoom-image.medium-zoom-image--opened{
      z-index: 101;
    }
  `)
}
