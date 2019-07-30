import { Message } from 'element-ui';
import store from '../store/index'
import {
    storeLoginInfo,
    storeRoutes,
    handleNewArticle
}from './mutationsType'

import {
    handleLogin,
    getNewArticle,
    upDataNewArticleStatus,
    getDataNewArticleStatusNo,
    uploadArticle
} from '../require/index'
import router from '../router';
let timer= null
export default {
    async asyHandleLogin ({state,commit},data){
        let userInfo= await handleLogin(data)
        console.log(userInfo.data.code)
        if(userInfo.data.code === 200){
            // 登录成功
            commit(storeLoginInfo,userInfo.data)
            Message({message: '登录成功！',type: 'success'})
            // 在这里设置退出登录的倒计时，时间到自动退出登录，清空本地缓存
            clearInterval(timer)
            let time= 60*30  //设置30分钟为有效时间，超过30分钟之后会自动退出
            timer= setInterval(()=>{
                time--
                // 这里的时候是，没有到期的，这时需要将数据实时存储到vuex中
                store.commit('storeLogoutTime',time)
                if(time <= 0){
                    // 清空缓存
                    store.commit('logOut')
                    clearInterval(timer)
                }
            },1000)
            router.push({path: '/home/index'})
        }else if(userInfo.data.code === 201){
            // 密码错误
            Message({message: '密码错误！',type: 'error'})
        }else if(userInfo.data.code === 202){
            //未注册
            Message({message: '账号未注册！',type: 'warning'})
        }     
    },
    asyGetNewArticle({state,commit}){ //异步获取newArticle
        return getNewArticle()
    },
    asyUpDataNewArticleStatus({commit,state},data){ //更新最新文章的status 不存入vuex
        return upDataNewArticleStatus(data)
    },
    
    asyGetDataNewArticleStatusNo({commit,state}){ //更新最新文章的status==0 不存入vuex
        return getDataNewArticleStatusNo()
    },

    asyUploadArticle({commit,state},data){ //上传文章
        return uploadArticle(data)
    }
    
 
}