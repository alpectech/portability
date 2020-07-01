require("babel-core/register");
require("babel-polyfill");

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import store from './store'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
});

new Vue({
  store,
  el: '#app',
  render: h => h(App),
  router: router
})
