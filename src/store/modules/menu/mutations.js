export default {
  CHANGE_DRAWER(state, payload) {
    state.openedDrawer = payload;
  },
  CHANGE_VISIBILITY_NEW_AD_WINDOW(state, payload) {
    state.visibleNewAdWindow = payload;
  },
  CHANGE_VISIBILITY_LOGIN_WINDOW(state, payload) {
    state.visibleLoginWindow = payload;
  },
  CHANGE_VISIBILITY_REGISTRATION_WINDOW(state, payload) {
    state.visibleRegistrationWindow = payload;
  }
}