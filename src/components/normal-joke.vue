<template>
    <div id="joke-display">
        <h3 id="normal">{{ normalJokeGet }}</h3>
    </div>
</template>

<script>
    export default {
        name: "normal-joke",

        computed: {
            normalJokeGet: function() {
                return this.$store.state.joke
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