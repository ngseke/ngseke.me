import { useIntersectionObserver } from '@vueuse/core'
import { ref, nextTick, watch } from 'vue'
import useMounted from './useMounted'

export default function useIsCoverVisible () {
  const { isMounted } = useMounted()
  const isCoverVisible = ref<boolean | null>(null)
  const $cover = ref<HTMLElement | null>(null)

  watch(isMounted, async () => {
    await nextTick()
    $cover.value = document.querySelector('#cover')
  }, { immediate: true })

  useIntersectionObserver(
    $cover,
    ([{ isIntersecting }]) => {
      isCoverVisible.value = isIntersecting
    },
  )

  return { isCoverVisible }
}
