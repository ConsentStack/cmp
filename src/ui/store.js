import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import EventBus from './eventBus';

import iabVendorList from '../configs/iabVendorList';
import customVendorList from '../configs/customVendorList';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  // strict: true, // TODO: this should bet set in dev ONLY!
  plugins: debug ? [createLogger()] : [],

  state: {
    isShow: false,
    currentView: 'Modal',
    clientId: null,
    vendorsList: iabVendorList.vendors.concat((customVendorList.vendors || []).map((vendor) => {
      return {
        ...vendor,
        isCustom: true,
      };
    })),
    userConsentObject: {
      purposes: [],
      vendors: [],
      customVendors: [],
      // customPurposes: [],
    },
    clientConfig: null,
  },

  getters: {
    getUserConsentObject: state => state.userConsentObject,
    getCurrentClientConfig: state => state.clientConfig,
    getCurrentClientVendorList: (state, getters) => {
      // first we fetch the IAB, and filter the IAB vendors
      if (!getters.getCurrentClientConfig) {
        return [];
      }
      const {
        vendors,
        customVendors,
      } = getters.getCurrentClientConfig.defaults;
      const configVendors = [...vendors, ...customVendors];
      return state.vendorsList.filter(vendor => configVendors.includes(vendor.id));
    },
  },

  mutations: {
    setClientId(state, clientId) {
      state.clientId = clientId;
    },
    setClientConfig(state, clientConfig) {
      state.clientConfig = clientConfig;
    },
    updateUserConsentObject(state, payload) {
      const {
        toggleType,
        toggleValue,
        toggleId,
      } = payload;
      if (!['purposes', 'vendors'].includes(toggleType)) {
        console.log('CMP-UI :: Unknown Toggle Type', toggleType);
        return;
      }
      const attr = toggleType === 'purposes' ? 'purposes' : toggleId <= 1000 ? 'vendors' : 'customVendors';
      let arrayValue = state.userConsentObject[attr];

      if (attr === 'purposes' && toggleId === 13) {
        if (toggleValue) {
          arrayValue.push(1, 2, 3, 4, 5);
        } else {
          arrayValue = arrayValue.filter(a => a > 5);
        }
      }

      if (toggleValue) {
        if (!arrayValue.includes(toggleId)) {
          arrayValue.push(toggleId);
        }
      } else {
        arrayValue = arrayValue.filter(id => id !== toggleId);
      }
      state.userConsentObject = {
        ...state.userConsentObject,
        [attr]: arrayValue,
      };
    },
    // this mutation is called right after setting the clientId, so we can use the getter
    // to fetch the correct client config object
    syncClientDefaultsToUserObject(state, payload) {
      state.userConsentObject = {
        purposes: [...payload.purposes],
        vendors: [...payload.vendors],
        customVendors: [...payload.customVendors],
        // customPurposes: [...payload.customPurposes],
      };
    },

    changeShowState(state, payload) {
      state.isShow = payload;
    },

    changeCurrentView(state, payload) {
      state.currentView = payload;
    },

  },
  actions: {
    setFullConsent({
      commit,
      getters,
    }, payload) {
      console.log(`CMP-UI :: full-consent Event: ${payload}`);
      const defaultConfig = getters.getCurrentClientConfig.defaults;
      EventBus.$emit('save-selection', defaultConfig);
      commit('syncClientDefaultsToUserObject', defaultConfig);
      commit('changeShowState', false);
      commit('changeCurrentView', 'Modal');
    },
    setPartialConsent({
      commit,
      getters,
    }, payload) {
      console.log(`CMP-UI :: partial-consent Event: ${payload}`);
      const config = getters.getUserConsentObject;
      EventBus.$emit('save-selection', config);
      commit('changeShowState', false);
      commit('changeCurrentView', 'Modal');
    },
    setClientId({
      commit,
    }, clientId) {
      return import(
        /* webpackMode : "eager" */
        `../configs/client.${clientId}.js`).then((configImport) => {
        const config = configImport.default;
        commit('setClientConfig', config);
        commit('syncClientDefaultsToUserObject', config.defaults);
      }).catch(err => console.error(err));
    },
  },
});
