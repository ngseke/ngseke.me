import { ViteSSG } from 'vite-ssg'

import './index.sass'

import App from './App.vue'
import routes from '~pages'
import IconLink from './components/IconLink.vue'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (
        [to.name, from.name].every(name => name === 'projects')
      ) return

      return savedPosition || { top: 0 }
    },
  },
  ({ app }) => {
    app.component('IconLink', IconLink)
  }
)
