<template>
    <div>

    <h1 class="client-styles">{{ getCurrentClientConfig.views.vendorView.title }}</h1>

    <p class="client-styles">{{ getCurrentClientConfig.views.vendorView.body }}</p>

    <vk-table v-bind:data="paginatedData" class="client-styles" narrowed>
        <vk-table-column title="Vendor Name" cell="name" class="client-styles"></vk-table-column>
        <vk-table-column title="Policy Link">
          <a slot-scope="{ row }" :href="row.policyUrl" target="_blank">Link</a>
        </vk-table-column>
        <vk-table-column title="Allow">
          <cmp-toggle toggleType="vendors" :purposeId="row.id" :key="row.id" slot-scope="{ row }" :value="toggleValue(row.id)" :labels="{checked: 'on', unchecked: 'off'}"></cmp-toggle>
        </vk-table-column>
    </vk-table>

    <vk-pagination :page.sync="pageNumber" :perPage="size" :total="totalVendors" align="center">
        <vk-pagination-page-prev></vk-pagination-page-prev>
        <vk-pagination-pages></vk-pagination-pages>
        <vk-pagination-page-next></vk-pagination-page-next>
    </vk-pagination>

    <p class="uk-text-right client-styles">
        <vk-button v-on:click="setPartialConsent" class="client-styles">Accept Selected</vk-button>
        <vk-button v-on:click="setFullConsent" type="secondary" class="client-styles">Accept All</vk-button>
    </p>

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      pageNumber : 1,
    }
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 5
    }
  },
  methods: {
    ...mapActions([
      'setFullConsent',
      'setPartialConsent'
    ]),
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
    toggleValue(id) {
      const { vendors, customVendors } = this.getUserConsentObject;
      return customVendors.includes(id) || vendors.includes(id);
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentClientConfig',
      'getCurrentClientVendorList',
      'getUserConsentObject'
    ]),
    totalVendors() {
      return this.getCurrentClientVendorList.length;
    },
    pageCount() {
      let l = this.getCurrentClientVendorList.length;
      let s = this.size;
      return Math.floor(l / s);
    },
    paginatedData() {
      let start = (this.pageNumber - 1) * this.size;
      let end = start + this.size;
      return this.getCurrentClientVendorList.slice(start, end);
    }
  }
}
</script>

<style scoped>
</style>
