<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RandomView from './views/RandomView.vue';
import SearchView from './views/SearchView.vue';
import PokemonCard from './components/PokemonCard.vue';
import { ref, computed } from 'vue'
import TypeSearchView from './views/TypeSearchView.vue';
import Evolution from './components/EvolutionLine.vue';

defineProps({
  msg: {
    type:Object
  },
  onSendDatos: {
    type:Object
  }
});

const objectFromChild=ref();


function RecoversFromSon(data){
  objectFromChild.value=data;
}

const myObject = computed(() => {
    
  return objectFromChild.value;

});

</script>

<template>
  <body>
    <header>
      <RouterLink to="/"><img id="logo" src="./assets/logoPokemon.png" alt="Logo"></RouterLink>
      <RouterView />
    </header>
    <main>
      <section id="randomView">
        <RandomView @send-datos="RecoversFromSon"/>
      </section>
      <section id="searchView">
        <SearchView @send-datos="RecoversFromSon"></SearchView>  
      </section>       
      <section id="pokemonCard">
        <PokemonCard :pokemon="myObject" />
		<Evolution :data="myObject" @response="(data) => objectFromChild = data"/>
      </section>
      <section id="searchView2">
        <TypeSearchView @send-datos="RecoversFromSon"/>
      </section>  
    </main>
  </body>
</template>

<style scoped>

  body {
    background-color: #061ba1;
    height: fit-content;
    width: fit-content;
  }
  
  header {
    height: 17vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  #logo {
    height: 15vh;    
  }

  section {
    padding: 1% 0; 
  }

  #randomView {
        height: 15vh;
        width: 80vw;
        background-color: deepskyblue;
        margin: auto;
        border-radius: 24px;
        display: flex;
        justify-content: space-around;
  }

  #pokemonCard {
        width: 80vw;
        background-color: #ecc139;
        margin: auto;
        border-radius: 24px;
        display: flex;
		    flex-direction: column;
        align-items: center;
  }
</style>
