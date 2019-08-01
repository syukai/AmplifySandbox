import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
const { components, AmplifyEventBus } = require('aws-amplify-vue')
const { AmplifyPlugin } = require('aws-amplify-vue')
const AmplifyStore = require('./store/store')

Vue.use(Router)
Vue.use(AmplifyPlugin, AmplifyModules)
let user

getUser().then((user: any, error: any) => {
  if (user) {
    router.push({ path: '/' })
  }
})

function getUser () {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data: any) => {
    if (data && data.signInUserSession) {
      AmplifyStore.commit('setUser', data)
      return data
    }
  }).catch((e: any) => {
    AmplifyStore.default.commit('setUser', null)
    return null
  })
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/auth',
      name: 'Authenticator',
      component: components.Authenticator
    }
  ]
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser()
    if (!user) {
      return next({
        path: '/auth',
        query: {
          redirect: to.fullPath
        }
      })
    }
    return next()
  }
  return next()
})

export default router
