require("babel-core/register");
require("babel-polyfill");

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
