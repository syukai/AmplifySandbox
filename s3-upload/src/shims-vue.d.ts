declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module 'vue/types/vue' {
  import Vue from 'vue'
  // @ts-ignore
  import AwsAmplifyVue from 'aws-amplify-vue'
    interface Vue {
    $Amplify: AwsAmplifyVue
  }
}
