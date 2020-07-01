import Vuex from 'vuex';
import Vue from 'vue';
import key from './modules/key';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    key
  }
});
