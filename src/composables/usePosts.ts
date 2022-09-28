import dayjs from 'dayjs'
import PostFrontmatter from '../types/PostFrontmatter'

const toTimestamp = (date: dayjs.ConfigType) => +dayjs(date)

export default function usePosts () {
  const router = useRouter()

  const posts = computed(() => {
    const routes = router.getRoutes()

    return routes
      .filter(route => /\/blog\/(.+)/.test(route.path))
      .filter(route => !route.redirect)
      .map(route => {
        return {
          ...route.meta.frontmatter as PostFrontmatter,
          path: route.path,
        }
      })
      .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))
  })

  return {
    posts,
  }
}
