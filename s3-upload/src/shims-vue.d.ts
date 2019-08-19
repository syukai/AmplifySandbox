import Vue from 'vue'
// @ts-ignore
import AwsAmplifyVue from 'aws-amplify-vue'

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $Amplify: AwsAmplifyVue
  }
}
