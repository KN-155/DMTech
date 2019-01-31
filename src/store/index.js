import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDrawer: true,
        isMiniDrawer: true,
        isNewAd: false,
        isLoginWindow: false,
    },
    mutations: {
        changeDrawer(state, payload) {
            state.isDrawer = payload;
        },
        changeMiniDrawer(state, payload) {
            state.isMiniDrawer = payload;
        },
        changeNewAd(state, payload) {
            state.isNewAd = payload;
        },
        changeLoginWindow(state, payload) {
            state.isLoginWindow= payload;
        },
    }
})