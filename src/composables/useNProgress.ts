import NProgress from 'nprogress'

export function useNProgress () {
  const { beforeEach, afterEach } = useRouter()

  beforeEach((_to, _from, next) => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 100,
    }).start()
    next()
  })

  afterEach(() => setTimeout(NProgress.done, 200))
}
