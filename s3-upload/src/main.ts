import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Amplify, * as AmplifyModules from 'aws-amplify'
import store from './store/store'
// @ts-ignore
import { components, AmplifyPlugin } from 'aws-amplify-vue'
// @ts-ignore
import awsExports from './aws-exports'
Amplify.configure(awsExports)

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    App,
    components
  }
}).$mount('#app')
