import { useLocalStorage } from '@vueuse/core'

const storageKey = 'readHistory'

type ReadHistory = Record<string, number>

export default function useReadHistory () {
  const readHistory = useLocalStorage<ReadHistory>(storageKey, {})

  const pushReadHistory = (name: string) => {
    if (!(name in readHistory)) {
      readHistory.value[name] = +new Date()
    }
  }

  return {
    readHistory,
    pushReadHistory,
  }
}
