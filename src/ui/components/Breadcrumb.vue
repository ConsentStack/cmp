<template>
    <div>
        <vk-breadcrumb>
            <vk-breadcrumb-item v-show="currentView === 'Modal' || 'Purposes' || 'Vendors'" @click="changeCurrentView('Modal')" href="#">
              Home
            </vk-breadcrumb-item>
            <vk-breadcrumb-item v-show="currentView !== 'Modal'" @click="changeCurrentView('Purposes')" href="#">
              Purposes
            </vk-breadcrumb-item>
            <vk-breadcrumb-item v-show="currentView === 'Vendors'" @click="changeCurrentView('Vendors')" href="#">
              Partners
            </vk-breadcrumb-item>
        </vk-breadcrumb>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['currentView'])
  },
  methods: {
    ...mapMutations(['changeCurrentView'])
  }
}
</script>

<style scoped>

</style>
