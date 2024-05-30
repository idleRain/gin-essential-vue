import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    children: [
      {
        path: '',
        component: import('@/views/Login/components/LoginCard.vue'),
        meta: {
          title: '登录'
        }
      },
      {
        path: 'register',
        component: import('@/views/Login/components/RegisterCard.vue'),
        meta: {
          title: '注册'
        }
      }
    ]
  },
  {
    path: '/todo-list',
    component: () => import('@/views/TodoList/index.vue'),
    meta: {
      title: 'TodoList'
    }
  }
]
export default routes
