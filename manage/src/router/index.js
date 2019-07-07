import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

 const router= new Router({
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


// router.beforeEach((to, from, next) => {
//   console.log('to',to)
//   console.log('from',from)
//   console.log('next',next)
// })

export default router 
