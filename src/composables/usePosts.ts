import dayjs from 'dayjs'
import { Post } from '../types/Post'
import { PostFrontmatter } from '../types/PostFrontmatter'
import { PostGroup } from '../types/PostGroup'

const toTimestamp = (date: dayjs.ConfigType) => +dayjs(date)

export function usePosts () {
  const router = useRouter()

  const posts = computed<Post[]>(() => {
    const routes = router.getRoutes()
    const posts = routes
      .filter(route => /\/blog\/(.+)/.test(route.path))
      .filter(route => !route.redirect)
      .map(route => {
        return {
          ...route.meta.frontmatter as PostFrontmatter,
          path: route.path,
        }
      })
      .filter(post => !post.draft)
      .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))
    return posts
  })

  const postGroups = computed(() => {
    const groups = posts.value.reduce<Record<string, PostGroup>>((groups, post) => {
      const key = dayjs(post.date).year()
      const group = groups[key] ?? { name: key, posts: [] }
      group.posts.push(post)
      groups[key] = group

      return groups
    }, {})

    return Object.keys(groups)
      .sort((a, b) => Number(b) - Number(a))
      .map(key => groups[key])
  })

  return {
    posts,
    postGroups,
  }
}
