import { useLocalStorage } from '@vueuse/core'
import useProjects from './useProjects'

const storageKey = 'readHistory'

type ReadHistory = Record<string, number>

export default function useReadHistory () {
  const readHistory = useLocalStorage<ReadHistory>(storageKey, {})

  const pushReadHistory = (name: string) => {
    if (!(name in readHistory)) {
      readHistory.value[name] = +new Date()
    }
  }

  const { projectMap } = useProjects()

  const isReadAll = computed(() => (
    Object.keys(projectMap.value).every((key) => key in readHistory.value)
  ))

  const clearReadHistory = () => { readHistory.value = {} }

  return {
    readHistory,
    pushReadHistory,
    isReadAll,
    clearReadHistory,
  }
}
