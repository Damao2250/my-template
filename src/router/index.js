import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      // children: [
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/about/about')
    },
    {
      path: '',
      redirect: '/'
    },
  ]
})