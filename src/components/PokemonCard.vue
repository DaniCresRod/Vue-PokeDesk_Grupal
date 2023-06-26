<script setup>
import { computed } from 'vue'

const props = defineProps({
  cardClass: {
    type: String
  },
  pokemon: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      id: "",
      name: 'No pokemon Selected',
      sprites: {
        front_default: ''
      }
    }
  }
})

// let pokemonImg = computed(() => {
//   if (props.pokemon.sprites.value !== null) {
//     return props.pokemon.sprites.other['official-artwork'].front_default;
//   } else {
//     return null
//   }
// })

let pokemonImg = computed(() => {
  if (
    props.pokemon.sprites &&
    props.pokemon.sprites.other &&
    props.pokemon.sprites.other['official-artwork'] &&
    props.pokemon.sprites.other['official-artwork'].front_default
  ) {
    return props.pokemon.sprites.other['official-artwork'].front_default
  } else {
    return null
  }
})

// let pokemonType = computed(() => {
//   if (props.pokemon.types !== null){
//     return props.pokemon.types[0].type['name']
//   } else {
//     return null
//   }
// })

let pokemonType = computed(() => {
  if (props.pokemon.types && props.pokemon.types.length > 0) {
    return props.pokemon.types[0].type['name']
  } else {
    return null
  }
})

// onUpdated(() => {
//   pokemonType.value = props.pokemon.types[0].type['name'];
//   return pokemonType.value
// })
// onUpdated(() => {
//   pokemonImg.value = props.pokemon.sprites.front_default
//   console.log(pokemonImg.value)
// })
</script>

<template v-if="pokemon">
  <!-- <div :class="pokemon.types[0].type['name']"> -->
  <div :class="pokemonType">
    <h2 class="idName">{{ pokemon.id }}  {{ pokemon.name }}</h2>
    <!-- <h2>{{ pokemon.name }}</h2> -->
    <img v-if="pokemonImg" :src="pokemonImg" />
    <!-- pokemon.sprites.other.official-artwork.front-default -->
    <section>
      <p v-for="(eachType, index) in pokemon.types" :class="eachType.type.name" :key="index">{{ eachType.type.name }}</p>
    </section>
    <!-- <p v-if="pokemon">{{ pokemon.types[1].type.name }}</p> -->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');
div {
  background: rgb(41, 41, 41);
  /* width: 300px; */
  /* height: 450px; */
  width: 15vw;
  height: 46vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  font-family: 'Comic Neue', cursive;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid #fff;
  box-shadow: 10px 10px 12px 10px rgba(0, 0, 0, 0.3);
  font-family: 'Comic Neue', cursive;
  font-weight: 700;
  text-transform: capitalize;
}

div h2 {
  grid-row: 1;
  margin: auto auto;
}

div img {
  width: 70%;
  margin: auto;
}

div h2 {
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin: auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 20px;
  border-radius: 10px;
}

p {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}


.idName {
  display: flex;
  align-items: center;
}


.fire {
  background-color: #f05030;
  color: #f3ff01;
  border: 2px solid #fff;
}

.water {
  background-color: #3899f8;
  color: #feff00;
  border: 2px solid #fff;
}

.electric {
  background: #f8d030;
  color: #000aff;
  border: 2px solid #fff;
}

.steel {
  background: #a8a8c0;
  color: #0400ff;
  border: 2px solid #fff;
}

.bug {
  background: #a8b820;
  color: #0400ff;
  border: 2px solid #fff;
}

.dragon {
  background: #7860e0;
  color: #fffc00;
  border: 2px solid #fff;
}

.ghost {
  background: #6060b0;
  color: #fffc00;
  border: 2px solid #fff;
}

.fairy {
  background: #e79fe7;
  color: #0f00ff;
  border: 2px solid #fff;
}

.ice {
  background: #58c8e0;
  color: #0400ff;
  border: 2px solid #fff;
}

.fighting {
  background: #a05038;
  color: #f9ff01;
  border: 2px solid #fff;
}

.normal {
  background: #a8a090;
  color: #0400ff;
  border: 2px solid #fff;
}

.grass {
  background: #78c850;
  color: #0102ff;
  border: 2px solid #fff;
}

.psychic {
  background: #f870a0;
  color: #1200ff;
  border: 2px solid #fff;
}

.rock {
  background: #b8a058;
  color: #0400ff;
  border: 2px solid #fff;
}

.dark {
  background: #7a5848;
  color: #e8ff01;
  border: 2px solid #fff;
}

.ground {
  background: #e9d6a4;
  color: #0d00ff;
  border: 2px solid #fff;
}

.poison {
  background: #b058a0;
  color: #ffff00;
  border: 2px solid #fff;
}

.flying {
  background: #98a8f0;
  color: #0115ff;
  border: 2px solid #fff;
}
</style>
