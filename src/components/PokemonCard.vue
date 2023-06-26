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
    return props.pokemon.sprites.other['official-artwork'].front_default
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
  <div :class="pokemon.types[0].type['name']">
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
  box-shadow: 2px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  font-size: 18px;
}
div img {
  width: 300px;
}

div h2 {
    font-weight: bold;
    font-family: sans-serif;
}

:deep().fire {
  background-color: #f05030;
  color: #FFFE01;
}

:deep().water {
  background-color: #3899f8;
  color: #FFFF00;
}

:deep().electric {
  background: #f8d030;
  color: #0400FF;
}

:deep().steel {
  background: #a8a8c0;
  color: #0102FF;
}

:deep().bug {
  background: #a8b820;
  color: #4500FF;
}

:deep().dragon {
  background: #7860e0;
  color: #FFED1B;
}

:deep().ghost {
  background: #6060b0;
  color: #FEFF00;
}

:deep().fairy {
  background: #e79fe7;
  color: #0E01FF;
}

:deep().ice {
  background: #58c8e0;
  color: #0107FF;
}

:deep().fighting {
  background: #a05038;
  color: #F9FF01;
}

:deep().normal {
  background: #a8a090;
  color: #0900FF;
}

:deep().grass {
  background: #78c850;
  color: #0300FF;
}

:deep().psychic {
  background: #f870a0;
  color: #0400FF;
}

:deep().rock {
  background: #b8a058;
  color: #0800FF;
}

:deep().dark {
  background: #7a5848;
  color: #00FFFD;
}

:deep().ground {
  background: #e9d6a4;
  color: #0102FF;
}

:deep().poison {
  background: #b058a0;
  color: #FEFF00;
}

:deep().flying {
  background: #98a8f0;
  color: #1001FF;
}
</style>
