// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/base.css'
import { Message } from 'element-ui';
Vue.use(ElementUI);

Vue.config.productionTip = false
// 每次刷新都会进入这个页面，所以在这里判断登录是否过期 
if(store.state.logoutTime > 0 && JSON.stringify(store.state.userInfo) !== "{}"){ //判断剩余是时间是否大于0
  let timer= null
  clearInterval(store.timer)
  let time= store.state.logoutTime
  store.timer= setInterval(()=>{
      time--
      // 这里的时候是，没有到期的，这时需要将数据实时存储到vuex中
      store.commit('storeLogoutTime',time)
      if(time <= 0){
          // 清空缓存
          store.commit('logOut')
          clearInterval(store.timer)
      }
  },1000)
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
