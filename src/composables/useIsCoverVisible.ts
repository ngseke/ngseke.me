import { useIntersectionObserver } from '@vueuse/core'

const coverRef = ref<HTMLElement | null>(null)

export default function useIsCoverVisible () {
  const route = useRoute()
  const isCoverVisible = ref<boolean | null>(null)

  onMounted(() => {
    watch(route, async () => {
      if (!isClient) return
      await nextTick()
      if (!coverRef.value) isCoverVisible.value = null
    }, { immediate: true })
  })

  useIntersectionObserver(
    coverRef,
    ([{ isIntersecting }]) => {
      isCoverVisible.value = isIntersecting
    },
  )

  return {
    coverRef,
    isCoverVisible,
  }
}
