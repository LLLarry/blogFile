import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
// import routerList from './filterRouter.js'
Vue.use(Router)

 const router= new Router({
    //  mode: 'history',
  routes:[
     {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
      },
      {
        path: '*',
        name: '404',
        component: () => import('@/components/404/404')
       },
  ]
 })
const powerRouter= [
    { path: '/',redirect:'/home/index', name: 'index',component: () => import('@/view/Home') ,hidden:false, meta: {role: ['admin','editor']} },
    {
    path: '/home',
    name: 'Home',
    meta:  {role: ['admin']}, //这个是登录者是否可以访问的权限
    component: () => import('@/view/Home'),
      children: [
        {  
          path: '/home/index', //首页
          name: 'Index',
          meta:  {role: ['admin','editor']}, //这个是登录者是否可以访问的权限
          component: () => import('@/view/ManageHome/ManageHome'),
        },
        {
          path: '/home/manageIndex',
          name: 'ManageIndex',
          meta:  {role: ['admin']}, //这个是登录者是否可以访问的权限
          component: () => import('@/view/ManageIndex/ManageIndex')
        },
        {
          path: '/home/manageIndexText',
          name: 'ManageIndexText',
          meta:  {role: ['admin']}, //这个是登录者是否可以访问的权限
          component: () => import('@/view/ManageIndexText/ManageIndexText')
        }       
     ]
    },
   
    {
    path: '/testa',
    name: 'TestA',
    meta: {role: ['admin','editor']}, //这个是登录者是否可以访问的权限
    component: () => import('@/view/TestA/TestA')
    },
    {
      path: '/testa2',
      name: 'TestA2',
      meta: {role: ['admin']},
      component: () => import('@/view/TestA2/TestA2')
      }
  ]
router.addRoutes(powerRouter)
 
  //管理员可以看到所有，editor可以看到TestA2

  let routesList= []
router.beforeEach((to, from, next) => {
  let userInfo= store.getters.getUserInfo  //获取登录信息 userInfo= {userName: 'larry', classify: 'admin'}
  let routes= store.getters.getRoutes   //获取vuex中存储的路由
  console.log(routes)
  if(JSON.stringify(userInfo) != "{}" ){ //当没有登录信息时（用户没有登录）
    console.log(routes,routes.length)
    if(routes.length === 0){ //判断这里面store中有没有存路由，没有路由就执行下面，根据权限动态添加路由
      if(userInfo.classify === 'admin'){  //根据权限过滤路由
        routesList= powerRouter
      }else if(userInfo.classify === 'editor'){
        routesList=powerRouter.filter((item,i)=>{
            if(item.meta.role.indexOf(userInfo.classify) != -1){ //当前用户有访问当前路由的权限
              return true
            }
        })
      }
      router.addRoutes(routesList)  //将过滤出来的路由添加到router中
      store.commit('storeRoutes',routesList) //将新添加的路由保存在vuex中 
      next({...to}) //调往目标路径
      // store.dispatch('asyStoreRoutes',routesList).then(res => { 
      //   next({ ...to })
      // }).catch(() => {})

    }else {
      next()
    }
   
  }else{ //已经存在新路由了
    if (['/login'].indexOf(to.path) !== -1) { //包含/login  判断目标路径中是否包含/login， 包含就前往这个路径，不包含 就跳转到/login路径中
      next()
   } else {  //不包含/login
      next('/login')
   }
  }
  
})



export default router 
