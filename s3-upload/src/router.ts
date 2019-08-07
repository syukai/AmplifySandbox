import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { Profile } from '@/components'
import Authenticator from './views/Authenticator.vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
// @ts-ignore
import AmplifyStore from './store/store'
// @ts-ignore
import { components, AmplifyEventBus, AmplifyPlugin } from 'aws-amplify-vue'

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(Router)
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
    AmplifyStore.commit('setUser', null)
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
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true}
    },
    {
      path: '/auth',
      name: 'Authenticator',
      component: Authenticator
    }
  ]
})

router.beforeResolve(async (to, from, next) => {
  console.log('beforeResolve')
  console.log(to)
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
