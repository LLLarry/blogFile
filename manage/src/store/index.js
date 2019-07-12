
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

 const Store= new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default Store