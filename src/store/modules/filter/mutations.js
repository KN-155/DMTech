export default {
  CHANGE_CATEGORY(state, payload) {
    state.category = payload;
    state.subcategory = '';
    state.direction = '';
  },
  CHANGE_SUBCATEGORY(state, payload) {
    state.subcategory = payload;
  },
  CHANGE_DIRECTION(state, payload) {
    state.direction = payload;
  },
}