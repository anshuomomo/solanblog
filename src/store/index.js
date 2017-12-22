// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    backend: {
      namespaced: true,
      modules: {
        user: user
      }
    },
    frontend: {
      namespaced: true
    },
    global: {
      namespaced: true
    }
  }
})
