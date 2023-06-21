<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import SearchView from './SearchView.vue';
import RandomView from './RandomView.vue';
// import CardView from './CardView.vue';
</script>

<template>
  <body>
    <!-- <header>
      <section id="logoSection">
        <RouterLink to="/"><img id="logo" src="./../assets/logoPokemon.png" alt="Logo"></RouterLink>
        <RouterView />
      </section>
    </header> -->
    <main>
      <section id="randomPokemon">
        <RandomView />
      </section>
      <section id="searchPokemon">
        <SearchView />
      </section>
      <section id="pokemonCard">
        <CardView />
      </section>
    </main>
  </body>
</template>

<style scoped>
  /* body {
    background-color: #061ba1;
    height: 100vh;
  }
  
  header {
    width: 100vw;
    height: 50vh;
  }

  #logoSection {
    height: fit-content;
    min-width: 100%;
    display: flex;
    justify-content: center;
  } 
  
  #logo {
    height: 20vh;
    margin: auto;
  } */

  #randomPokemon {
    width: 100vw;
    height: 50vh;
  }

</style>
