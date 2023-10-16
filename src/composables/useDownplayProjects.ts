import { useLocalStorage } from '@vueuse/core'

export const downplayProjectsQueryKey = 'fe'

export function useDownplayProjects () {
  const storageKey = 'fe'

  const router = useRouter()
  const route = useRoute()
  const isDownplayed = useLocalStorage<boolean>(storageKey, false)

  watch(() => downplayProjectsQueryKey in route.query, (value) => {
    if (value) {
      isDownplayed.value = true
    }
  }, { immediate: true })

  watch(isDownplayed, (value) => {
    if (!value) {
      const newQuery = { ...route.query }
      delete newQuery[downplayProjectsQueryKey]
      router.push({ query: newQuery })
    }
  })

  return {
    isDownplayed,
  }
}
