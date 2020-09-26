<template>
    <div id="joke-display">
        <h3 id="snake">{{ snakeJokeGet }}</h3>
    </div>
</template>

<script>
    export default {
        name: "snake-joke",
        
        computed: {
            snakeJokeGet() {
                return  this.$store.getters.SnakeJoke 
            }
        }
    }
</script>

<style scoped>
     #joke-display {
        display: grid;
        justify-items: center;
        align-items: center;
    }

    h3 {
        width: 30vw;
        height: 10vh;
        display: none;
        background-color: lightgrey;
        padding: 1em;
        text-align: center;
    }

</style>