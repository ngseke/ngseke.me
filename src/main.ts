import { createApp } from 'vue'
import './index.sass'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
