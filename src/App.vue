<script setup>
//// import { RouterLink, RouterView } from 'vue-router'
//// import HelloWorld from './components/HelloWorld.vue'
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
      <section id="pokemonCard">
        <PokemonCard :pokemon="miObject" />
      </section>  
    </main>
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
