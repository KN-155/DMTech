import Vue from 'vue'

export default {
  async CREATE_USER({commit}, {email, password}) {
    //-----------------start-------------
    const users = await Vue.http.get('http://localhost:3000/users').then(r => r.body);
    const isNew = users.every(user => user.email !== email);

    if(isNew) {
      const user = {
        email,
        password,
        role: 0,
        firstName: '',
        lastName: '',
        number: '',
        avatar: '',
        favorites: []
      };

      Vue.http
        .post('http://localhost:3000/users', user)
    } else {
      console.log('Такой пользователь зарегистрирован');
    }
    //---------------end-------------

    // Vue.http.post('http://localhost:3000/users', {email, password}) //
  },

  async LOG_IN({commit}, {email, password}) {
    //-----------------start-------------
    const users = await Vue.http.get('http://localhost:3000/users').then(r => r.body);
    const user = users.find((user) => user.email === email);
    if(user && user.password === password){
      const {email, role, firstName, lastName, number, favorites, id, avatar} = user;
      const userObj = {
        id,
        email,
        role,
        firstName,
        lastName,
        number,
        favorites,
        avatar,
      };
      commit('SET_USER', userObj);
    } else {
      console.log("Пользователя не существует")
    }
    //---------------end-------------
  },

  LOG_OUT({commit}) {
    commit('SET_USER', null);
  },

  SET_FAVORITE({commit, getters}, payload) {
    if(payload.value){
      commit('ADD_FAVORITE', payload.id)
    } else {
      commit('DELETE_FAVORITE', payload.id)
    }
    Vue.http
      .patch('http://localhost:3000/users/' + getters.USER_ID, getters.USER)
  },

  UPDATE_USER({commit, getters}, payload) {
      commit('UPDATE_USER', payload);
    Vue.http
      .patch('http://localhost:3000/users/' + getters.USER_ID, getters.USER)
  },

  async GET_USER({commit}) {
    const user = await Vue.http.get('http://localhost:3000/users/1').then(r => r.body);
    commit('SET_USER', user)
  },


}