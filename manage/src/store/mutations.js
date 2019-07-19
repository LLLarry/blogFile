
import {
    storeLoginInfo,
    storeRoutes,
    handleNewArticle
}from './mutationsType'

export default {
    [storeLoginInfo](state,obj){
        state.userInfo= obj
        sessionStorage.setItem('state',JSON.stringify(state))
    },
    [storeRoutes](state,data){ //存储过滤下来的路由
        state.routes= data
        sessionStorage.setItem('state',JSON.stringify(state))
    },
    logOut(state){ //退出登录，清空vueX中state的缓存
        state.userInfo= {}
        state.routes= []
        state.logoutTime= 0
        sessionStorage.setItem('state',JSON.stringify(state))
    },
    storeLogoutTime(state,time){
        state.logoutTime= time
        sessionStorage.setItem('state',JSON.stringify(state))
    },
    [handleNewArticle](state,obj){
        state.newArticle= obj
        sessionStorage.setItem('state',JSON.stringify(state))
    }
}