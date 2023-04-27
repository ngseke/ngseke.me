import { PostFrontmatter } from '../types/PostFrontmatter'

export function usePostFrontmatter () {
  const route = useRoute()
  const frontmatter = computed(
    () => route.meta?.frontmatter as PostFrontmatter | undefined
  )
  return { frontmatter }
}
