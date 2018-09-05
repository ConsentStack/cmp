import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Toggle from '../../src/ui/components/Toggle.vue';

storiesOf('Toggle', module)
  .add('story as a component + template', () => ({
    components: { Toggle },
    template: '<toggle></toggle>'
  }))
  .add('story as a template', () => ({
    template: '<toggle></toggle>',
  }));
  