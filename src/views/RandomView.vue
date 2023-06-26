<script setup>
  
  import pokemonSearch from "../assets/services/ConnectApi"
  import { ref, onBeforeMount } from "vue";

  let data = ref();
  let pokemons = ref([]);
  let emit = defineEmits(['sendDatos']);
  
  onBeforeMount(()=>{for (let i = 0; i < 10; i++){
    const random = Math.floor(Math.random() * 1010) + 1;
    data.value = pokemonSearch(random);
    (data.value).then(x => (pokemons.value).push(x));
    console.log(data.value);
  }})

  function SendData(item){
    emit('sendDatos', item);
  }
  
</script>

<template id="card" class="flex" v-if="pokemons">
    <article class="card" v-for="(item, id) in pokemons" :key="id">
        <a @click="SendData(item)">
        <div class="card-body">
            <img :src="item.sprites.other['official-artwork'].front_default" :alt="item.name" class="card-body-img">
        </div></a>
        
    </article>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');

:root {
  --dark-cyan: hsl(189, 95%, 47%);
  --very-dark-desaturated: hsl(229, 23%, 23%);
  --dark-grayish-blue: hsl(227, 10%, 46%);
  --dark-gray: hsl(0, 0%, 59%);
}

.flex {
  font-family: 'Comic Neue', cursive;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  -webkit-box-orient: horizontal;
  gap:.1rem;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 40vh;
}

.card {
  background-color: white;
  width: 130px;
  border-radius: 100vmax;
  border: 0.2em solid #0AC;
  padding: .25rem;
  overflow: hidden;
  cursor:pointer;
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          
}
.card-body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: nowrap;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-bottom: 1px solid rgba(153, 153, 153, 0.383);
}

.card-body-img {
  width: 5rem;
  height: 5rem;
  padding:3rem;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: calc(-48px - 5px);
  background-color: white;
}
</style>