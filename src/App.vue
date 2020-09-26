<template>
  <div id="app">
    <joke-button></joke-button>
    <normal-joke v-if="Display == 'normal'"></normal-joke>
    <loud-joke v-else-if="Display == 'loud'"></loud-joke>
    <snake-joke v-else-if="Display == 'snake'"></snake-joke>
    <div v-else>Error</div>
    <div id="button-display">
      <button @click = "normalJokeCreation" class="btn">Normal Joke</button>
      <button @click= "loudJokeCreation" class="btn">Loud joke</button>
      <button @click= "snakeJokeCreation" class="btn">Snake joke</button>
    </div>
  </div>
</template>

<script>
import JokeButton from './components/joke-button.vue'
import NormalJoke from './components/normal-joke.vue'
import LoudJoke from './components/loud-joke.vue'
import SnakeJoke from './components/snake-joke.vue'

export default {
  name: "App",
  components: {
    JokeButton,
    NormalJoke,
    LoudJoke,
    SnakeJoke
  },

  computed: {
    Display() {
      return this.$store.state.display 
    }
  },

  methods: {
            normalJokeCreation: function() {
              this.$store.commit("normal");
            },
            loudJokeCreation: function() {
              this.$store.commit("loud");
            },
            snakeJokeCreation: function() {
              this.$store.commit("snake");
            }

        },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  justify-items: center;
  align-items: center;
}

#button-display {
  width: 20vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.5vw;
  justify-items: center;
  align-items: center;
}

.btn {
  width: 100%;
  padding: 0.5em;
  background-color: maroon;
  color: white;
  border: 1px solid white;
  border-radius: 0.8em;
}

.btn:hover {
  cursor: pointer;
  box-shadow: 1px 2px 2px grey; 
}
</style>
