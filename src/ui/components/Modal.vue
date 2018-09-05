<template>
    <div>
        <img class="logo-image" :src="getCurrentClientConfig.clientLogo">
        <h1 class="client-styles">{{ getCurrentClientConfig.views.homeView.title }}</h1>
        <p class="client-styles" v-html="getCurrentClientConfig.views.homeView.body"></p>
        <p class="uk-text-right client-styles">
            <vk-button class="client-styles" v-on:click="changeCurrentView('Purposes')">
              More Information
            </vk-button>
            <vk-button class="client-styles" v-on:click="fullConsent" type="secondary">
              I Agree
            </vk-button>
        </p>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'modal',
  data() {
    return {}
  },
  computed : {
    ...mapGetters([
      'getCurrentClientConfig',
    ]),
  },
  methods: {
    fullConsent() {
      console.log('CMP-UI :: (Entry) Full Consent Given');
      this.setFullConsent({})
    },
    ...mapMutations([
      'updatePurposes',
      'updateVendors',
      'changeCurrentView'
    ]),
    ...mapActions([
      'setFullConsent'
    ])
  }
}
</script>

<style scoped>
.logo-image {
  max-height: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
