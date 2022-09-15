import { ViteSSG } from 'vite-ssg'

import './index.sass'

import App from './App.vue'
import routes from './routes'

export const createApp = ViteSSG(App, { routes })
