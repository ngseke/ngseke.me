import { ViteSSG } from 'vite-ssg'

import './index.sass'

import App from './App.vue'
import routes from './routes'
import { FontAwesomeIcon } from './font-awesome'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.component('Fa', FontAwesomeIcon)
  }
)
