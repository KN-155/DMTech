export default {
  CREATE_AD (state, payload) {
    state.ads.push(payload);
  },
  SET_AD (state, payload) {
    state.ads = payload;
  }
}