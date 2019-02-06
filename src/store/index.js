import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openedDrawer: true,
    miniDrawer: false,
    visibleNewAdWindow: false,
    visibleLoginWindow: false,
    visibleRegistrationWindow: false,
    isActive: false,
  },
  mutations: {
    changeDrawer(state, payload) {
      state.openedDrawer = payload;
    },
    changeMiniDrawer(state, payload) {
      state.miniDrawer = payload;
    },
    changeVisibilityNewAdWindow(state, payload) {
      state.visibleNewAdWindow = payload;
    },
    changeVisibilityLoginWindow(state, payload) {
      state.visibleLoginWindow = payload;
    },
    changeVisibilityRegistrationWindow(state, payload) {
      state.visibleRegistrationWindow = payload;
    },
    changeActivity(state, payload) {
      state.isActive = payload;
    },
  },
});
