import { onMounted } from 'vue'

export default function useMountedBodyClass () {
  onMounted(async () => {
    await new Promise(resolve => setTimeout(resolve))
    document.querySelector('body')?.classList
      .add('transition-colors', 'duration-500')
  })
}
