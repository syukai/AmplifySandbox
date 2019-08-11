<template>
  <div class="form">
    <div class="inputRow" v-for="field in fields" v-bind:key="field.name">
      <div v-if="field.type === 'string'">
        <label class="inputLabel">{{field.label || field.name}}</label>
        <input
          class="input"
          v-model="user[field.name]"
        />
      </div>
      <div class="lineBreak" v-if="field.type === 'lineBreak'"></div>
    </div>
    <div class="actionRow">
      <button class="action" v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { UserModule } from '../store/store-user'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class ProfileForm extends Vue {
  /** data */
  user = {
    username: ''
  }
  @Prop() fields: any | null = null;

  async mounted () {
    if (UserModule.user) {
      const currentUser = await this.$Amplify.Auth.currentUserInfo()
      this.user = {
        username: currentUser.username,
        ...currentUser.attributes
      }
    }
    return 'mounted';
  }

  save () {
    const cognitoUser = UserModule.user
    if (!this.user || !cognitoUser) { return }
    this.$Amplify.Auth.updateUserAttributes(cognitoUser, this.user)
      .then((res: any) => {
        console.log(res)
      })
      .catch((e: any) => console.log(e))
  }
}
</script>
