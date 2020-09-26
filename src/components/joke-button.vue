<template>
    <div>
        <button @click="jokeCreation" id="joke-btn">Create a joke</button>
    </div>
</template>

<script>
    export default {
        name: "joke-button",

        methods: {
           jokeCreation: function() {
                this.$store.commit("JokeCreation")
           }
        }
    }
</script>

<style scoped>
    #joke-btn {
        width: 5vw;
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