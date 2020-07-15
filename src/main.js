require("babel-core/register");
require("babel-polyfill");

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
