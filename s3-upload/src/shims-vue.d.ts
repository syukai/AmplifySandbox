import Vue from 'vue'
// @ts-ignore
import AwsAmplifyVue from 'aws-amplify-vue'

// declare module '*.vue' {
//   interface Vue {
//     $Amplify: AwsAmplifyVue
//   }
// }

declare module 'vue/types/vue' {
  interface Vue extends Vue {
    $Amplify: any
  }
}
