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
      id: 0,
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
    <h2>{{ pokemon.id }}</h2>
    <h2>{{ pokemon.name }}</h2>
    <img v-if="pokemonImg" :src="pokemonImg" />
    <!-- pokemon.sprites.other.official-artwork.front-default -->
    <p v-for="(eachType, index) in pokemon.types" :key="index">{{ eachType.type.name }}</p>
    <!-- <p v-if="pokemon">{{ pokemon.types[1].type.name }}</p> -->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');

div {
  background: rgb(41, 41, 41);
  width: 300px;
  height: 450px;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 3;
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
  width: 250px;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  margin: auto auto;
}

p {
  margin: auto auto;
  font-weight: 700;
  grid-row: 3;
}

.fire {
  background-color: #f05030;
  color: #f3ff01;
}

.water {
  background-color: #3899f8;
  color: #feff00;
}

.electric {
  background: #f8d030;
  color: #000aff;
}

.steel {
  background: #a8a8c0;
  color: #0400ff;
}

.bug {
  background: #a8b820;
  color: #0400ff;
}

.dragon {
  background: #7860e0;
  color: #fffc00;
}

.ghost {
  background: #6060b0;
  color: #fffc00;
}

.fairy {
  background: #e79fe7;
  color: #0f00ff;
}

.ice {
  background: #58c8e0;
  color: #0400ff;
}

.fighting {
  background: #a05038;
  color: #f9ff01;
}

.normal {
  background: #a8a090;
  color: #0400ff;
}

.grass {
  background: #78c850;
  color: #0102ff;
}

.psychic {
  background: #f870a0;
  color: #1200ff;
}

.rock {
  background: #b8a058;
  color: #0400ff;
}

.dark {
  background: #7a5848;
  color: #e8ff01;
}

.ground {
  background: #e9d6a4;
  color: #0d00ff;
}

.poison {
  background: #b058a0;
  color: #ffff00;
}

.flying {
  background: #98a8f0;
  color: #0115ff;
}
</style>
