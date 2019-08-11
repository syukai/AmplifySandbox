import Vue from 'vue'
import Vuex, { StoreOptions, MutationTree } from 'vuex'
import {AmplifyState} from './types'

Vue.use(Vuex)

export default new Vuex.Store<AmplifyState>({})
