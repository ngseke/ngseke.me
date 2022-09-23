import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import useProjects from './useProjects'

const storageKey = 'readHistory'

type ReadHistory = Record<string, number>

export default function useReadHistory () {
  const readHistory = useLocalStorage<ReadHistory>(storageKey, {})

  const pushReadHistory = (name: string) => {
    console.log(name)
    if (!(name in readHistory)) {
      readHistory.value[name] = +new Date()
    }
  }

  const { projectMap } = useProjects()

  const isReadAll = computed(() => (
    Object.keys(projectMap.value).every((key) => key in readHistory.value)
  ))

  return {
    readHistory,
    pushReadHistory,
    isReadAll,
  }
}