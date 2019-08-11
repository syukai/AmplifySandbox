import { Mutation, Action, VuexModule, getModule, Module } from "vuex-module-decorators";
import store from "@/store/store"; // デコレータでstoreを指定するためimportする必要あり
import { AmplifyState } from './types'

import Vuex, { StoreOptions, MutationTree } from 'vuex'

@Module({ dynamic: true, store, name:'user', namespaced: true})
class User extends VuexModule implements AmplifyState {
  user = {
    username: ''
  };

  @Mutation
  setUser(state: AmplifyState, user: any) {
    state.user = user;
  }
}

export const UserModule = getModule(User);
