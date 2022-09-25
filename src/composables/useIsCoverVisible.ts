import { isClient, useIntersectionObserver } from '@vueuse/core'

export default function useIsCoverVisible () {
  const route = useRoute()
  const isCoverVisible = ref<boolean | null>(null)
  const $cover = ref<HTMLElement | null>(null)

  onMounted(() => {
    watch(route, async () => {
      if (!isClient) return
      await nextTick()
      $cover.value = document.querySelector('#cover')
      if (!$cover.value) isCoverVisible.value = null
    }, { immediate: true })
  })

  useIntersectionObserver(
    $cover,
    ([{ isIntersecting }]) => {
      isCoverVisible.value = isIntersecting
    },
  )

  return { isCoverVisible }
}
