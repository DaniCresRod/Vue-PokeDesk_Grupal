<script setup>
import { computed, onUpdated, defineProps } from 'vue'

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
  if (props.pokemon.sprites && props.pokemon.sprites.other && props.pokemon.sprites.other['official-artwork'] && props.pokemon.sprites.other['official-artwork'].front_default) {
    return props.pokemon.sprites.other['official-artwork'].front_default;
  } else {
    return null;
  }
});


// let pokemonType = computed(() => {
//   if (props.pokemon.types !== null){
//     return props.pokemon.types[0].type['name']
//   } else {
//     return null
//   }
// })

let pokemonType = computed(() => {
  if (props.pokemon.types && props.pokemon.types.length > 0) {
    return props.pokemon.types[0].type['name'];
  } else {
    return null;
  }
});


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
div {
  background: rgb(109, 102, 102);
  width: 300px;
  height: 450px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #fff;
  box-shadow: 10px 10px 12px 10px rgba(0, 0, 0, 0.3);
}
div img {
  width: 250px;
}

p {
  margin: 0;
}

.fire {
  background-color: #f05030;
}

.water {
  background-color: #3899f8;
}

.electric {
  background: #f8d030;
}

.steel {
  background: #a8a8c0;
}

.bug {
  background: #a8b820;
}

.dragon {
  background: #7860e0;
}

.ghost {
  background: #6060b0;
}

.fairy {
  background: #e79fe7;
}

.ice {
  background: #58c8e0;
}

.fight {
  background: #a05038;
}

.normal {
  background: #a8a090;
}

.grass {
  background: #78c850;
}

.psychic {
  background: #f870a0;
}

.rock {
  background: #b8a058;
}

.dark {
  background: #7a5848;
}

.ground {
  background: #e9d6a4;
}

.poison {
  background: #b058a0;
}

.flying {
  background: #98a8f0;
}
</style>
