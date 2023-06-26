<script setup>
  
  import pokemonSearch from "../assets/services/ConnectApi"
  import { ref, onBeforeMount } from "vue";

  let data = ref();
  let pokemons = ref([]);
  let emit = defineEmits(['sendDatos']);
  
  onBeforeMount(()=>{for (let i = 0; i < 10; i++){
    const random = Math.floor(Math.random() * 1010)+1;
    console.log(random);
    data.value = pokemonSearch(random);
    (data.value).then(x => (pokemons.value).push(x));
  }
  })

  function SendData(item){
    emit('sendDatos', item);
    console.log(item)
  }
  
</script>

<template id="card" class="flex" v-if="pokemons">
    <article class="card" v-for="(item, id) in pokemons" :key="id">
        <a @click="SendData(item)"><img src="../assets/images/bg-pattern-card.svg" alt="imagen header card" class="card-header">
        <div class="card-body">
            <img :src="item.sprites.other['official-artwork'].front_default" :alt="item.name" class="card-body-img">
            <h1 class="card-body-title">
                {{ item.name }}
                <span>{{ item.id }}</span>
            </h1>
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

template{
  font-family: 'Kumbh Sans', sans-serif;
  background-color: var(--dark-cyan);
  background-image: url("../assets/images/bg-pattern-top.svg"), url("../images/bg-pattern-bottom.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: right 50vw bottom 50vh, left 50vw top 50vh;
}

.flex {
  font-family: 'Comic Neue', cursive;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  -webkit-box-orient: horizontal;
  gap: .1rem;
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

.card-header {
  width: 100%;
  display: block;
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
  width: 80px;
  height: 80px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: calc(-48px - 5px);
  background-color: white;
}

.card-body-title {
  margin-top: .3rem;
  padding:.2rem;
  font-size: .5rem;
  font-weight: 500;
  text-transform: capitalize;
}

.card-body-title span {
  color: var(--dark-gray);
  font-weight: 400;
}

</style>