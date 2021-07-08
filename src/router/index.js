import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
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
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes,
  // 解决 vue 中跳转页面后滚动条没有在最顶端问题
  scrollBehavior (to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return {
        x: 0,
        y: 0,
        // 配置动画平滑滚动
        behavior: 'smooth'
      }
    }
  }
})

// 解决路由冗余导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
