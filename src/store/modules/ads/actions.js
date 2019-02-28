import Vue from 'vue';

function formatDate() {
  let date = new Date();

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;
  return dd + '/' + mm + '/' + yy;
}


export default {
  CREATE_AD({commit, getters}, payload) {
    payload.data = formatDate();
    payload.user = getters.USER.id;
    Vue.http.post('http://localhost:3000/ads', payload)
  },
  async GET_ADS({commit}) {
    const ads = await Vue.http.get('http://localhost:3000/ads').then(r => r.body);
    commit('SET_AD', ads)
  },

}