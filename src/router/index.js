import Vue from 'vue'
import VueRouter from 'vue-router'
// import { getStorage } from '../utils/Tyh_getStorage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
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
  },
  {
    path: '/discount',
    name: 'discount',
    component: () => import('@/views/discount')
  },
  {
    path: '/newHome',
    name: 'newHome',
    component: () => import('@/views/newHome')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   const damai = getStorage('damai')
//   if (to.path !== '/login') {
//     if (damai) {
//       next()
//     } else {
//       next('/login')
//     }
//     return
//   }
//   next()
// })

export default router
