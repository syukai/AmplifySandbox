import Vue from 'vue'
import Vuex, { StoreOptions, MutationTree } from 'vuex'
import { AmplifyState } from './types'

Vue.use(Vuex)
const mutations: MutationTree<AmplifyState> = {
  setUser: (state: AmplifyState, user: any) => (state.user = user)
}
// const store: StoreOptions<AmplifyState> = {
const state: AmplifyState = {
  user: null
}

export default new Vuex.Store<AmplifyState>({
  state,
  mutations
})
