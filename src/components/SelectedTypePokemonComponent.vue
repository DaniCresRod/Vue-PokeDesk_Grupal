<script setup>
import { onUpdated, ref } from 'vue';
import pokemonSearch from "../services/ConnectApi"

let props=defineProps({
    pokemon:{
        type:Object,
    }
})

let emit=defineEmits(['sendDatos']);

const data=ref();

function Search(){
    data.value=pokemonSearch((props.pokemon.url).split('/')[6]);    

    (data.value).then( x=> emit('sendDatos', x));
}

onUpdated(()=>{
    
})

</script>

<template>
<li @click="Search()" >{{ pokemon.name }}</li>

</template>

<style scoped>
li{
    list-style: none;
    padding: 0.5vh 4vw;
    border-radius: 5px;
    text-transform: capitalize;
    font-weight: bold;
    border:2px solid white;
    cursor: pointer;
}

</style>