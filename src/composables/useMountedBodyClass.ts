import { onMounted } from 'vue'

export default function useMountedBodyClass () {
  onMounted(async () => {
    if (typeof document === 'undefined') return

    await new Promise(resolve => setTimeout(resolve))
    document.querySelector('body')?.classList
      .add('transition-colors', 'duration-500')
  })
}
