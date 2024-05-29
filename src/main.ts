import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import useIcons from '@/assets/icons.ts'
import router from '@/router'
import store from '@/store'

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .use(useIcons)
  .mount('#app')
