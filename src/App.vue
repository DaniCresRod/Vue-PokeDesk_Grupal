<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <body>
    <header>
      <section id="logoSection">
        <RouterLink to="/"><img id="logo" src="./assets/logoPokemon.png" alt="Logo"></RouterLink>
        <RouterView />
      </section>
    </header>
    <HomeView />
  </body>
</template>

<style scoped>

  body {
    background-color: #061ba1;
    height: 100vh;
  }
  
  header {
    height: 15vh;
    width: 100vw;
    /* display: flex;
    justify-content: center; */
  }
  
  #logoSection {
    display: flex;
    justify-content: center;
  }

  #logo {
    height: 15vh;
    margin: auto;
  }

</style>
