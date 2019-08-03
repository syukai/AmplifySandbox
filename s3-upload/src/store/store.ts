import Vue from 'vue'
import Vuex, { StoreOptions, MutationTree } from 'vuex'
import storeUser from './store-user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: storeUser
  }
})
