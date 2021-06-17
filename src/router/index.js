import Vue from 'vue'
import VueRouter from 'vue-router'
import { getStorage } from '../utils/Tyh_getStorage'

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
    path: '/text',
    name: 'text',
    component: () => import('@/views/text')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const damai = getStorage('damai')
  if (to.path !== '/login') {
    if (damai) {
      next()
    } else {
      next('/login')
    }
    return
  }
  next()
})

export default router
