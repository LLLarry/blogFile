// const route= [ //默认设置
//          { /**当访问根目录时自动跳转/index，如果下面的如有中没有/index没有权限开启，那么将会 */
//         path: '/', 
//         redirect: '/index'
//         },
//         {
//         path: '/login',
//         name: 'Login',
//         component: () => import('@/components/Login')
//         },
//         {
//         path: '*',
//         component: () => import('@/components/Login')
//         },
// ] //这里放默认路由，如：登录注册页，404page

// const routerMap= [  //已有的路由
//         {
//         path: '/index',
//         name: 'Home',
//         component: () => import('@/view/Home')
//         }
//   ]
// const data= { //模拟请求过来的数据
//     code: 200,
//     token: 'sada5qwecasdasd5656f45sd64f65ad4a56sd465qw4',
//     rules: {
//         page: {
//             Home: false,
//             upload: true,
//             from: false,
//             main: false
//         },
//         component:{
//             edit_button: true
//         }
//     }
// }

// let routerList= []
// for(let key in data.rules.page){
//     if(data.rules.page[key]){
//        let list= routerMap.filter((item,i)=>{
//             return item.name === key
//         })
//         routerList= routerList.concat(list) 
//     }
// }
// routerList= routerList.concat(route)
// export default routerList  //将最终的routerList暴露出去

