<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RandomView from './views/RandomView.vue';
import SearchView from './views/SearchView.vue';
import PokemonCard from './components/PokemonCard.vue';
import { ref, computed } from 'vue'
import TypeSearchView from './views/TypeSearchView.vue';

defineProps({
  msg: {
    type:Object
  },
  onSendDatos: {
    type:Object
  }
});

const objectFromChild=ref();


function RecuperaDelHijo(data){
  objectFromChild.value=data;
}

const miObject = computed(() => {
    
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
        <RandomView />
      </section>
      <section id="searchView">
        <SearchView @send-datos="RecuperaDelHijo"></SearchView>  
      </section>  
      <section id="searchView2">
        <TypeSearchView @send-datos="RecuperaDelHijo"/>
      </section>  
      <section id="pokemonCard">
        <PokemonCard :pokemon="miObject" />
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
    height: 18vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  #logo {
    height: 15vh;    
  }

  section {
    padding: 2% 0; 
  }

  #randomView {
        height: 25vh;
        width: 80vw;
        background-color: deepskyblue;
        margin: auto;
        border-radius: 24px;
  }

  #pokemonCard {
        height: 50vh;
        width: 80vw;
        background-color: #ecc139;
        margin: auto;
        border-radius: 24px;
  }
</style>
