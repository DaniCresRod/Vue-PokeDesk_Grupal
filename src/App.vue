<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SearchView from './views/SearchView.vue';

</script>

<template>
  <body>
    <HomeView></HomeView>
    <RouterView />
  </body>
</template>
