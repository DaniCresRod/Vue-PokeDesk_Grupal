<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HomeView from './views/HomeView.vue';
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
      <!-- <HomeView /> -->
      <section>
        <RandomView />
      </section>
      <section>
        <SearchView />
      </section>  
      <section>
        <PokemonCard />
      </section>  
    </main>
  </body>
</template>

<style scoped>

  body {
    background-color: #061ba1;
    height: fit-content;
  }
  
  header {
    height: 20vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  #logo {
    height: 15vh;
    margin: auto;
  }

  section {
    padding: 5% 0; 
  }

</style>
