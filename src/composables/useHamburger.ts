import { useToggle, useScrollLock, useWindowSize } from '@vueuse/core'
import { computed, watch } from 'vue'

export default function useHamburger () {
  const [isExpanded, toggleIsExpanded] = useToggle()
  const bodyEl = computed(() => {
    if (typeof document === 'undefined') return
    return document.querySelector('body')
  })
  const isLocked = useScrollLock(bodyEl)
  watch(isExpanded, (value) => { isLocked.value = value })

  const { width } = useWindowSize()
  watch(width, () => { isExpanded.value = false })

  return {
    isExpanded,
    toggleIsExpanded,
  }
}
