import { Project } from '../types/Project'
import { ProjectFrontmatter } from '../types/ProjectFrontmatter'
import { useDownplayProjects } from './useDownplayProjects'

export function useProjects () {
  const router = useRouter()

  const { isDownplayed } = useDownplayProjects()

  const projectMap = computed(() => {
    const routes = router.getRoutes()
    return routes
      .filter(route => /\/project\/(.+)/.test(route.path))
      .filter(route => !route.redirect)
      .reduce<Record<string, Project>>((map, route) => {
      const key = (route.name as string)?.split('project-')[1]
      const frontmatter = route.meta.frontmatter as ProjectFrontmatter
      map[key] = {
        ...frontmatter,
        path: route.path,
        cover: `${frontmatter.cover}?v=${__COMMIT_HASH__}`,
      }
      return map
    }, {})
  })

  const projects = computed(() => {
    const map = projectMap.value
    const groups = [
      {
        title: 'Browser Extension',
        list: [
          map['versatile-npm'],
          map['leetcode-night'],
        ],
      },
      {
        title: 'Web',
        list: [
          map['iphone-price'],
          map.koasu,
          map.mcip,
          map['mcip-cms'],
          map['credit-card-calc'],
          map['em-optimization-lab'],
        ],
      },
      {
        title: 'System Design',
        list: [
          map.boss,
        ],
      },
      {
        title: 'Game',
        list: [
          {
            title: 'Flip Card',
            briefDescription: 'Emoji 翻牌配對遊戲',
            githubLink: 'https://github.com/ngseke/vue-flip-card',
            demoLink: 'https://ngseke.github.io/vue-flip-card/',
            cover: '/img/project-cover/flip-card.png',
          },
          map.gomoku,
          map['tic-tac-toe'],
          map['raise-your-red-flag'],
          map['typing-typing'],
        ],
      },
      {
        title: 'Identity Design',
        list: [
          map['camp-2017'],
          map.shanlinliang,
        ],
      },
    ] as const

    return groups
  })

  const downplayedProjects = computed(() => (
    projects.value.filter((group) => {
      if (isDownplayed.value) return group.title !== 'Identity Design'
      return true
    })
  ))

  return {
    projectMap,
    projects,
    downplayedProjects,
  }
}
