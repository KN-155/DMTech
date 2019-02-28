export default {
  CHANGE_DRAWER({commit}, payload) {
    commit('CHANGE_DRAWER', payload)
  },
  CHANGE_VISIBILITY_NEW_AD_WINDOW({commit}, payload) {
    commit('CHANGE_VISIBILITY_NEW_AD_WINDOW', payload)
  },
  CHANGE_VISIBILITY_LOGIN_WINDOW({commit}, payload) {
    commit('CHANGE_VISIBILITY_LOGIN_WINDOW', payload)
  },
  CHANGE_VISIBILITY_REGISTRATION_WINDOW({commit}, payload) {
    commit('CHANGE_VISIBILITY_REGISTRATION_WINDOW', payload)
  }
}