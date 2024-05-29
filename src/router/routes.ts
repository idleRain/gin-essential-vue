import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    children: [
      {
        path: '',
        component: import('@/views/Login/components/LoginCard.vue')
      },
      {
        path: 'register',
        component: import('@/views/Login/components/RegisterCard.vue')
      }
    ]
  },
  {
    path: '/todo-list',
    component: () => import('@/views/TodoList/index.vue')
  }
]
export default routes
