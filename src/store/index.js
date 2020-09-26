import Vue from "vue";
import Vuex from "vuex";
import getJoke from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: ""
  },

  mutations: {
    JokeCreation: function(state) {
      getJoke.request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
        method: "get"
      }).then((response) => {
        console.log(response.data);
        state.joke = response.data.joke
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  actions: {},
  modules: {},
  getters: {
    normalJoke: function(state) {
      return state.joke
    },
    loudJoke: function(state) {
      return state.joke.toUpperCase();
    },
    SnakeJoke: function(state) {
      return state.joke.replace(" ", "_")
    }
  }
});
