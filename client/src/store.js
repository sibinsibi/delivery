import { createStore } from "vuex";
///////////////////////////////////////

const store = createStore({
  state: {
    user: ''
  },
  actions: {
    ADD_USER: function({ commit }, new_user) {
      commit("ADD_USER_MUTATION", new_user);
    },
    DELETE_USER: function({ commit }, user_id) {
      commit("DELETE_USER_MUTATION", user_id);
    },
    SORT_USERS: function({ commit }) {
      commit("SORT_USERS_MUTATION");
    },
    UNSORT_USERS: function({ commit }) {
      commit("UNSORT_USERS_MUTATION");
    },
    SET_USER: function( { commit }, current_user ){
      commit("SET_USER_MUTATION", current_user);
    }
  },

  mutations: {
    ADD_USER_MUTATION: function(state, new_user) {
      state.users.push(new_user);
    },
    DELETE_USER_MUTATION: function(state, user_id) {
      state.users.splice(user_id, 1);
    },
    SORT_USERS_MUTATION: function(state) {
      state.users.sort((a, b) => a.name.localeCompare(b.name));
    },
    UNSORT_USERS_MUTATION: function(state) {
      state.users.sort((a, b) => a.index - b.index);
    },
    SET_USER_MUTATION: function(state, current_user){
      state.user = current_user
    }
  },
  getters: {
    users: (state) => {
      return state.users;
    },
    user: (state) => {
      return state.user;
    },
  },
});
export default store;
//  const getUser = () => {
//    return 'sibin'
//  }