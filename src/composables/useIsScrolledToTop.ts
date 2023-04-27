import { useWindowScroll } from '@vueuse/core'

export function useIsScrolledToTop () {
  const { y } = useWindowScroll()
  const isScrolledToTop = computed(() => !y.value)
  return { isScrolledToTop }
}
