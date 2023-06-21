<script setup>
import SearchView from './SearchView.vue';
// import RandomView from './RandomView.vue';
// import CardView from './CardView.vue';
</script>

<template>
  <body>
    <header>
      <section id="logoSection">
        <RouterLink to="/"><img id="logo" src="./../assets/logoPokemon.png" alt="Logo"></RouterLink>
      </section>
      <section id="randomPokemon">
        <RandomView></RandomView>
        <RouterView />
      </section>
      <section id="searchPokemon">
        <SearchView></SearchView>
        <RouterView />
      </section>
    </header>
    <main>
      <section id="pokemonCard">
        <CardView></CardView>
        <RouterView />
      </section>
    </main>
  </body>
</template>

<style scoped>
  body {
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

  #randomPokemon {
    width: 100vw;
    height: 50vh;
  }

  #logo {
    height: 20vh;
    margin: auto;
  }
</style>
