import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const state = {
//   // isLogin: false,
//   user: {}
// }

// const mutations = {
//   userStatus (state, u) {
//     state.user = u
//   }
// }

export default new Vuex.Store({
  state: {
    user: {},
    islogin: false
  },
  mutations: {
    userStatus (state, u) {
      state.user = u
    },
    isLogin (state, i) {
      state.islogin = i
    }
  }
})
