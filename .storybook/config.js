import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex';

import Toggle from '../src/ui/components/Toggle.vue';

Vue.use(Vuex);

Vue.component('toggle', Toggle);

function loadStories() {
  require('./stories/index');
}

configure(loadStories, module);