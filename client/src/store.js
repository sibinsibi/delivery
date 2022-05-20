import { createStore } from "vuex";
///////////////////////////////////////

const store = createStore({
  state: {
    user: ''
  },
  actions: {
    SET_USER: function( { commit }, current_user ){
      commit("SET_USER_MUTATION", current_user);
    }
  },

  mutations: {
    SET_USER_MUTATION: function(state, current_user){
      state.user = current_user
    }
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
});
export default store;
