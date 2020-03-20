import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        SET_USERS: (state, payload) => {
          state.users = payload
        },
        REMOVE_USER (state, payload) {
          const index = state.users.findIndex(u => u.id === payload.id)  
          state.users.splice(index, 1);
          console.log('REMOVE_USER', state.users);
        }
    },
    actions: {
        getUsers({ commit }, payload) {
            axios
            .get('http://www.json-generator.com/api/json/get/coMXyqAfnm')
            .then(response => {
              console.log(response.data);
              commit("SET_USERS", response.data);
            })  
            .catch(err => {
              console.log('error', err);
            })
        }
    },
});

export default store;