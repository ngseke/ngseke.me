import { useToggle, useScrollLock, useWindowSize } from '@vueuse/core'

export function useHamburger () {
  const [isExpanded, toggleIsExpanded] = useToggle()
  const bodyEl = computed(() => {
    if (!isClient) return
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
