import { createStore } from "vuex";
///////////////////////////////////////
//import user_data from "./data/users.json";


// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);
// createApp.use(Vuex)

// const store = new Vuex.Store({

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