<script setup>
    import { pokeapi } from '@/services/pokeapi.js';
    defineProps({
        // cardId: {
        //     type: String
        // },
        // cardClass: {
        //     type: String
        // },
        // cardName: {
        //     type: String
        // },
        imgUrl: {
            type: String
        },
        // typeA: {
        //     type: String
        // },
        // typeB: {
        //     type: String,
        //     default: ""
        // },
        // data(){
        //    return {
        //     pokemonData: {},
        //     pokemonID: ''
        //    } 
        // },

            
        
    });
    async function searchPokemon() {
                    try {
                        const pokemonToFind = await fetch(`${pokeapi}/${this.pokemonID}`);
                        const pokemon = await pokemonToFind.json();
                        this.pokemonData = pokemon;
                        console.log(pokemon);
                        return pokemon;
                    } catch (error) {
                        alert('Pokemon was not found')
                    }
                }
    
</script>


<template>
    <div :class="cardClass">
        <h3> {{ pokemonID }} </h3>
        <h2>{{ pokemonName }}</h2>
        <img :src="imgUrl">
        <p>{{ typeA }}</p>
        <p>{{ typeB }}</p>
    </div>

    <div>
        <input type="text" v-model="pokemonID">
        <button @click="searchPokemon()">Search Pokemon</button>
    </div>

</template>


<style scoped>
    div {
        background: rgb(109, 102, 102);
        width: 70%;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div img {
        width: 250px;
    }
    
    .fuego{
        background-color: red;
    }
</style>