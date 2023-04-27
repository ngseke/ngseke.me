import { ProjectFrontmatter } from '../types/ProjectFrontmatter'

export function useProjectFrontmatter () {
  const route = useRoute()
  const frontmatter = computed(
    () => route.meta?.frontmatter as ProjectFrontmatter | undefined
  )
  return { frontmatter }
}
