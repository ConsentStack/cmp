import Vue from 'vue';
import Vuikit from 'vuikit';
import { ElementModalClose } from 'vuikit/lib/modal';
import EventBus from './eventBus';

// import and make global all components
import App from './App.vue';
import Modal from './components/Modal.vue';
import Purposes from './components/Purposes.vue';
import Vendors from './components/Vendors.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Toggle from './components/Toggle.vue';

Vue.use(Vuikit);

// registering all components globally
Vue.component('CmpApp', App);
Vue.component('Modal', Modal);
Vue.component('Purposes', Purposes);
Vue.component('Vendors', Vendors);
Vue.component('AppBreadcrumb', Breadcrumb);
Vue.component('CmpToggle', Toggle);
Vue.component('ElementModalClose', ElementModalClose);

Vue.mixin({
  methods: {
    $ready(fn) {
      if (process.env.NODE_ENV === 'production') {
        return this.$nextTick(fn);
      }

      setTimeout(() => {
        this.$nextTick(fn);
      });
    },
  },
});

// creating a root in the DOM for the app to attach to, when called
const divToAttachApp = document.createElement('div');
divToAttachApp.setAttribute('id', 'cmp-app');
document.body.appendChild(divToAttachApp);

// create the app instance and attach it to the DOM in a hidden state
const vm = new Vue(App).$mount('#cmp-app');

// this function is called to load the UI, it accepts the clientId
function renderVueApp(clientId) {
  return new Promise((resolve, reject) => {
    if (vm) {
      vm.$store.commit('setClientId', parseInt(clientId, 10));
      vm.$store.dispatch('setClientId', parseInt(clientId, 10));
      vm.$store.commit('changeShowState', true);
      EventBus.$on('save-selection', (value) => {
        console.log('[INFO][CMP-UI] Resolving Promise (save-selection):', value);
        resolve(value);
      });
    } else {
      console.error('CMP-UI :: No App Present');
      reject();
    }
  });
}

export default renderVueApp;
