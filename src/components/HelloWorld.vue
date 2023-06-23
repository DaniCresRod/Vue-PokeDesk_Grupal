<script setup>

import { onUpdated, ref } from 'vue';

const props=defineProps({
  msg: {
    type: Object,
    default: {
      id: 0,
      name:"Aun Nada",

    },
  }
})

const prueba=ref();
prueba.value="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png";

onUpdated(() => {

  prueba.value=props.msg.sprites.other["official-artwork"].front_default;

  return prueba.value;
})

//https://stackoverflow.com/questions/41051972/vue-uncaught-typeerror-cannot-read-property-of-undefined
</script>

<template>
  <div class="greetings">
    <h1 class="green" v-if="msg">{{ msg.id }}</h1>
    <h1 class="green" v-if="msg">{{ msg.name }}</h1>
    <img :src="prueba">
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
