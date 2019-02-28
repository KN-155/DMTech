export default {
  SET_USER(state, payload) {
    state.user = payload
  },

  UPDATE_USER(state, payload) {
    state.user = {
      ...state.user,
      ...payload
    }
  },
  DELETE_FAVORITE(state, payload) {
    const index = state.user.favorites.indexOf(payload);
    if (~index) {
      state.user.favorites.splice( index, 1 );
    }
  },
  ADD_FAVORITE(state, payload) {
    state.user.favorites.push(payload)
  },

}