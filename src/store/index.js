import Vue from "vue";
import Vuex from "vuex";
import getJoke from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: "",
    display: "normal"
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
    },
    loud: function(state) {
      state.display = "loud"
    },
    normal: function(state) {
      state.display = "normal"
    },
    snake: function(state) {
      state.display = "snake"
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
