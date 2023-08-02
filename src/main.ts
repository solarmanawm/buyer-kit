import './assets/main.css'

import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: f => f(App)
}).$mount('#app');