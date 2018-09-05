<template>
  <div>
    <h1 class="client-styles">{{ purposeView.title }}</h1>

    <p class="client-styles">{{ purposeView.body }}</p>

    <vk-table v-if="!purposeType || purposeType === 'iab'" :data="purposeView.purposeText" narrowed>
        <vk-table-column title="Purpose" cell="purpose"></vk-table-column>
        <vk-table-column title="Allow">
          <cmp-toggle toggleType="purposes" :purposeId="row.id"
                      slot-scope="{ row }" :value="toggleValue(row.id)" :labels="{checked: 'on', unchecked: 'off'}">
          </cmp-toggle>
        </vk-table-column>
    </vk-table>

    <vk-table v-if="purposeType === 'default'"
              :data="vendorList.purposes" narrowed>
      <vk-table-column title="Purpose">
        <div slot-scope="{ row }">
          <h4 class="purpose-header client-styles">{{ row.name }}</h4>
          <span class="client-styles">{{ row.description }}</span>
        </div>
      </vk-table-column>
      <vk-table-column title="Allow">
        <cmp-toggle toggleType="purposes" :purposeId="row.id"
                    :disabled="row.disabled"
                    slot-scope="{ row }" :value="toggleValue(row.id)" :labels="{checked: 'on', unchecked: 'off'}">
        </cmp-toggle>
      </vk-table-column>
    </vk-table>

    <p class="client-styles">{{ purposeView.vendorsText }}
      <a @click="changeCurrentView('Vendors')" href="#">PARTNERS</a>
    </p>

    <p class="uk-text-right client-styles">
        <vk-button @click="setPartialConsent" class="client-styles">Accept Selected</vk-button>
        <vk-button @click="setFullConsent" type="secondary" class="client-styles">Accept All</vk-button>
    </p>

  </div>
</template>

<script>

import { mapMutations, mapActions, mapGetters } from 'vuex';
import customVendorList from '../../configs/customVendorList';

export default {
  name: 'purposes-component',
  data() {
    return {
      vendorList: customVendorList
    }
  },
  computed : {
    ...mapGetters([
      'getCurrentClientConfig',
      'getUserConsentObject'
    ]),
    purposeType() {
      return this.getCurrentClientConfig.views.purposeView.purposeType;
    },
    purposeView() {
      return this.getCurrentClientConfig.views.purposeView;
    }
  },
  methods : {
    ...mapActions(['setFullConsent', 'setPartialConsent']),
    ...mapMutations(['changeCurrentView']),
    toggleValue(id) {
      return this.getUserConsentObject.purposes.includes(id);
    }
  }
}

</script>

<style scoped>
 .purpose-header {
   margin-bottom: 5px;
 }
</style>
