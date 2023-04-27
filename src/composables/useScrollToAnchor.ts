export function useScrollToAnchor () {
  onMounted(async () => {
    await nextTick()
    const { hash } = location
    if (hash) {
      const id = hash.split('#')[1]
      document.getElementById(id)
        ?.scrollIntoView()
    }
  })
}
