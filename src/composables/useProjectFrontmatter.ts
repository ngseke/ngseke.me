import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectFrontmatter from '../types/ProjectFrontmatter'

export default function useProjectFrontmatter () {
  const route = useRoute()
  const frontmatter = computed(
    () => route.meta?.frontmatter as ProjectFrontmatter | undefined
  )
  return { frontmatter }
}
