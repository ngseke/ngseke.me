import { ViteSSG } from 'vite-ssg'

import './index.sass'

import App from './App.vue'
import routes from '~pages'
import { FontAwesomeIcon } from './font-awesome'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior (_to, _from, savedPosition) {
      return savedPosition || { top: 0 }
    },
  },
  ({ app }) => {
    app.component('Fa', FontAwesomeIcon)
  }
)
