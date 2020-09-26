<template>
    <div id="joke-display">
        <h3 id="loud">{{ loudJokeGet }}</h3>
    </div>
</template>

<script>
    export default {
        name: "loud-joke",
       
        computed: {
            loudJokeGet() {
                return  this.$store.getters.loudJoke 

            },
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
        background-color: lightgrey;
        padding: 1em;
        text-align: center;
    }
</style>