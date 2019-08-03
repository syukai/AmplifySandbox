<template>
  <amplify-authenticator
    :authConfig="authConfig">
  </amplify-authenticator>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// @ts-ignore
import { Auth } from 'aws-amplify-vue'
@Component({
  components: {
    Auth
  }
})
export default class Home extends Vue {
  /** data */
  authConfig: any = {
    signUpConfig: {
      signUpFields: ['name'],
      hiddenDefaults: ['phone_number']
    }
  };
}
</script>
