import Vue from 'vue'
import VueRouter from 'vue-router'

import layoutFull from '@/components/layouts/layoutFull'
import layoutDefault from '@/components/layouts/layoutDefault'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: layoutFull,
    children: [
      {
        path: 'page-not-found',
        component: () => import('@/components/errors/404'),
        name: '404',
        meta: {
          title: 'Page not found'
        }
      },
      {
        path: 'home',
        component: () => import('@/components/pages/home'),
        name: 'home',
        meta: {
          title: 'Home',
          active: 'home'
        }
      },
      {
        path: 'posts',
        component: () => import('@/components/pages/posts'),
        name: 'posts',
        meta: {
          title: 'Posts',
          active: 'posts'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
