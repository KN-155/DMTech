import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const state = {
  openedDrawer: true,
  visibleNewAdWindow: false,
  visibleLoginWindow: false,
  visibleRegistrationWindow: false
};

export default {
  state,
  mutations,
  getters,
  actions
}