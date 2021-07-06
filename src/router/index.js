import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/color',
        name: 'color',
        component: () => import('@/views/color')
      },
      {
        path: '/type',
        name: 'type',
        component: () => import('@/views/type')
      },
      {
        path: '/series',
        name: 'series',
        component: () => import('@/views/series')
      },
      {
        path: '/channel',
        name: 'channel',
        component: () => import('@/views/channel')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
