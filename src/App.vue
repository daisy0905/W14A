<template>
  <div id="app">
    <joke-button></joke-button>
    <normal-joke></normal-joke>
    <loud-joke></loud-joke>
    <snake-joke></snake-joke>
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

   methods: {
            normalJokeCreation: function() {
                document.getElementById("normal").style.display = "block",
                document.getElementById("snake").style.display = "none",
                document.getElementById("loud").style.display = "none"
            },
             loudJokeCreation: function() {
                document.getElementById("normal").style.display = "none",
                document.getElementById("snake").style.display = "none",
                document.getElementById("loud").style.display = "block"
            },
            snakeJokeCreation: function() {
                document.getElementById("normal").style.display = "none",
                document.getElementById("snake").style.display = "block",
                document.getElementById("loud").style.display = "none"
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
