import Vuex, { StoreOptions, MutationTree } from 'vuex'
import { AmplifyState } from './types'

// const store: StoreOptions<AmplifyState> = {
const state: AmplifyState = {
  user: null
}
// const mutations: MutationTree<AmplifyState> = {
const mutations = {
  setUser: (state: AmplifyState, user: any) => (state.user = user)
}

export default {
  state,
  mutations
}
