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

let pokemonImg = computed(() => {
  if (props.pokemon.sprites.value !== null) {
    return props.pokemon.sprites.front_default
  } else {
    return null
  }
})

// onUpdated(() => {
//   pokemonImg.value = props.pokemon.sprites.front_default
//   console.log(pokemonImg.value)
// })
</script>

<template v-if="pokemon">
  <div :class="cardClass">
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
  width: 70%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
div img {
  width: 250px;
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
