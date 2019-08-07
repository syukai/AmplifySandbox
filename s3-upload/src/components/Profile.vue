<template>
  <div class="container">
    <h1 v-if="user">{{user.username}}'s profile</h1>
    <div >
      <profile-form
        :user="user"
        :fields="fields"
        v-if="user"
      />
    </div>
    <section >
      <article class="message" :class="mfaAccordion">
        <div class="message-header" @click="mfa = !mfa">
          Multifactor Authentication <div class="arrow"> &nbsp; ></div>
        </div>
        <div class="message-body">
          <div class="message-content">
            <amplify-set-mfa v-bind:mfaConfig="mfaConfig"></amplify-set-mfa>
          </div>
        </div>
      </article>
      <article class="message" :class="profilePicAccordion">
        <div class="message-header" @click="profilePic = !profilePic">
          Profile Pic <div class="arrow"> &nbsp; ></div>
        </div>
        <div class="message-body">
          <div class="message-content">
            <amplify-photo-picker v-bind:photoPickerConfig="photoPickerConfig"/>
            <amplify-s3-image :imagePath="imagePath" />
          </div>
        </div>
      </article>
    </section>

</template>

<script lang="ts">
import { Auth, Storage, Logger } from 'aws-amplify'
import AmplifyStore from '../store/store'

import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Profile extends Vue {
  /** data */
  profilePic: boolean = false;
  imagePath:string = `${AmplifyStore.state.user.username}/avatar`;
  photoPickerConfig: any = {
    header: 'Upload Profile Pic',
    accept: 'image/*',
    path: `${AmplifyStore.state.user.username}/`,
    defaultName: 'avatar'
  };
  mfa: boolean = false;
  fields: any = [
    { type: 'string', name: 'email', label: 'Email' },
    { type: 'string', name: 'phone_number', label: 'Phone Number' }
  ];

  /** method */
  get mfaConfig () {
    let that = this
    return {
      mfaDescription: 'My app\'s mfa description!!',
      mfaTypes: ['TOTP', 'SMS', 'None'],
      cancelHandler () {
        that.mfa = !that.mfa
      }
    }
  }
  get user () {
    return AmplifyStore.state.user
  }
  get profilePicAccordion () {
    return {
      'is-closed': !this.profilePic,
      'is-primary': this.profilePic,
      'is-dark': !this.profilePic
    }
  }
  get mfaAccordion () {
    return {
      'is-closed': !this.mfa,
      'is-primary': this.mfa,
      'is-dark': !this.mfa
    }
  }

}
</script>
