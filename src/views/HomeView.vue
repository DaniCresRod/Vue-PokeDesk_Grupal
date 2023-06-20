<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <body>
    <header>
      <section id="logoSection">
        <RouterLink to="/"><img id="logo" src="./../assets/images/logoPokemon.png" alt="Logo"></RouterLink>
      </section>
      <section id="randomPokemon">
      </section>
    </header>
    <main>
      <!-- <TheWelcome /> -->
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
  }

  #logoSection {
    min-width: 100%;
    display: flex;
    justify-content: center;
  }

  #randomPokemon {
    background-color: bisque;
    width: 100vw;
    height: 50vh;
  }

  #logo {
    height: 20vh;
    margin: auto;
  }

</style>
