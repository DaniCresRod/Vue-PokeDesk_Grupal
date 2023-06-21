<script setup>
   import { ref } from "vue";
   import  ConnectApi  from "./../services/ConnectApi"
defineProps({            
        
    });
    const pokemonData =  ref();
    cardData.value = pokemonData
    // let pokemonValue = pokemonData.value
    pokemonData.value.then(x => console.log(x))
</script>


<template>
    <div :class="cardClass">
        <h3> {{ pokemonData.value.id }} </h3>
        <h2> {{ pokemon.name }} </h2>
        <img :src="imgUrl">
        <p>{{ typeA }}</p>
        <p>{{ typeB }}</p>
    </div>

    <div>
        <button @click="pokemonData"></button>
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
    
    .fire{
        background-color: #f05030;
    }

    .water{
        background-color: #3899f8;
    }

    .electric{
        background: #f8d030;
    }

    .steel {
        background: #a8a8c0;
    }

    .bug {
        background: #a8b820;
    }

    .dragon {
        background: #7860e0; 
    }

    .ghost {
        background: #6060b0;
    }

    .fairy {
        background: #e79fe7;
    }

    .ice {
        background: #58c8e0;
    }

    .fight {
        background: #a05038;
    }

    .normal {
        background: #a8a090;
    }

    .grass {
        background: #78c850;
    }

    .psychic {
        background: #f870a0;
    }

    .rock {
        background: #b8a058;
    }

    .dark {
        background: #7a5848;
    }

    .ground {
        background: #e9d6a4;
    }

    .poison {
        background: #b058a0;
    }

    .flying {
        background: #98a8f0;
    }

    
</style>