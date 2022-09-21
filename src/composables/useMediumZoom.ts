import { isClient, useStyleTag } from '@vueuse/core'
import mediumZoom, { Zoom } from 'medium-zoom'
import { nextTick, onMounted, onUnmounted, watch } from 'vue'
import useDark from './useDark'

export default function useMediumZoom (selector = '*:not(a) > img') {
  let zoom: Zoom
  onMounted(() => {
    if (!isClient) return
    zoom = mediumZoom(selector)
  })

  onUnmounted(() => {
    zoom.detach()
  })

  watch(useDark(), async (isDark) => {
    await nextTick()
    zoom?.update({ background: isDark ? '#1B1917' : '#fff' })
  }, { immediate: true })

  useStyleTag(`
    .medium-zoom-overlay {
      z-index: 100;
    }

    .medium-zoom-image.medium-zoom-image--opened{
      z-index: 101;
    }
  `)
}
