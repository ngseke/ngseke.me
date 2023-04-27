export function useMountedBodyClass () {
  onMounted(async () => {
    if (!isClient) return

    await new Promise(resolve => setTimeout(resolve))
    document.querySelector('body')?.classList
      .add('transition-colors', 'duration-500')
  })
}
