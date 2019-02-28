import Vue from 'vue';
import Vuex from 'vuex';

import menu from './modules/menu/menu'
import users from './modules/user/users'
import ads from './modules/ads/ads'
import filter from './modules/filter/filter'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    users,
    ads,
    filter
  }
});
