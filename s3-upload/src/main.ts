import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Amplify, * as AmplifyModules from 'aws-amplify'
// @ts-ignore
import { AmplifyPlugin } from 'aws-amplify-vue'
// @ts-ignore
import awsExports from './aws-exports'
Amplify.configure(awsExports)

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
