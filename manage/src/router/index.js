import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
// import Home from '@/view/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/index',
      name: 'Home',
      component: () => import('@/view/Home')
    }
  ]
})
