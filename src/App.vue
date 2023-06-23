<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RandomView from './views/RandomView.vue';
import SearchView from './views/SearchView.vue';
import PokemonCard from './components/PokemonCard.vue'
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
        <SearchView />
      </section>  
      <section id="pokemonCard">
        <PokemonCard />
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
