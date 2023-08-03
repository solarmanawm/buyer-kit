import VRow from './components/VRow/index.vue';
import VContainer from './components/VContainer/index.vue';
import VColumn from './components/VColumn/index.vue';

const BuyerKit = {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
        Vue.component('VRow', VRow);
        Vue.component('VContainer', VContainer);
        Vue.component('VColumn', VColumn);
    }
  };
  
  export default BuyerKit;