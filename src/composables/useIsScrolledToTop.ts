import { useWindowScroll } from '@vueuse/core'

export default function useIsScrolledToTop () {
  const { y } = useWindowScroll()
  const isScrolledToTop = computed(() => !y.value)
  return { isScrolledToTop }
}
