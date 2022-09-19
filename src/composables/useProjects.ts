import { computed } from 'vue'
import { useRouter } from 'vue-router'
import ProjectFrontmatter from '../types/ProjectFrontmatter'

type Project = ProjectFrontmatter & {
  path?: string,
}

export default function useProjects () {
  const router = useRouter()

  const projectMap = computed(() => {
    const routes = router.getRoutes()
    return routes
      .filter(route => /\/project\/(.+)/.test(route.path))
      .reduce<Record<string, Project>>((map, route) => {
      const key = (route.name as string)?.split('project-')[1]
      map[key] = {
        ...route.meta.frontmatter as ProjectFrontmatter,
        path: route.path,
      }
      return map
    }, {})
  })

  const projects = computed(() => {
    const map = projectMap.value
    return [
      {
        title: 'Extension',
        cover: 'https://images.unsplash.com/photo-1541512416146-3cf58d6b27cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        list: [
          map['leetcode-night'],
        ],
      },
      {
        title: 'MCIP',
        cover: 'https://images.unsplash.com/photo-1615917063840-0b7c196e29c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        list: [
          map.mcip,
          map['mcip-cms'],
        ],
      },
      {
        title: 'Web',
        cover: 'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        list: [
          map.koasu,
          map['credit-card-calc'],
          map.emo,
        ],
      },
      {
        title: 'System Design',
        cover: 'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        list: [
          map.boss,
        ],
      },
      {
        title: 'Game',
        cover: 'https://images.unsplash.com/photo-1528804431125-842f17de657b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80',
        list: [
          {
            title: 'Flip Card',
            briefDescription: 'Emoji 翻牌配對遊戲',
            githubLink: 'https://github.com/ngseke/vue-flip-card',
            demoLink: 'https://ngseke.github.io/vue-flip-card/',
          },
          map.gomoku,
          map['tic-tac-toe'],
          map.flag,
          map.typingtyping,
        ],
      },
      {
        title: 'Design',
        cover: 'https://images.unsplash.com/photo-1616941245386-fc2f3458836f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
        list: [
          map.camp2017,
          map.shanlinliang,
        ],
      },
    ]
  })

  return {
    projectMap,
    projects,
  }
}
