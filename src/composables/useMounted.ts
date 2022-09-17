import { ref, onMounted } from 'vue'

export default function useMounted () {
  const isMounted = ref(false)
  onMounted(() => { isMounted.value = true })

  return { isMounted }
}
