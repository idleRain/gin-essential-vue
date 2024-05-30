import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.ts'
import { local } from '@/utils/storage.ts'
import { REDIRECT_WHITE_PATH } from '@/constant'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  if (!local.get('token') && !REDIRECT_WHITE_PATH.includes(to.path as any)) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
