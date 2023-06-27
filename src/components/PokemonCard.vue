<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  cardClass: {
    type: String
  },
  pokemon: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      id: '',
      name: 'No pokemon Selected',
      sprites: {
        front_default: ''
      }
    }
  }
})

let cardHover = ref()
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
// let pokemonAbilities = computed(() => {
//   if (props.pokemon.abilities && props.pokemon.abilities.length > 0) {
//     return props.pokemon.abilities[0].ability.name
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

let pokemonHeight = computed(() => {
  if (props.pokemon.height) {
    return props.pokemon.height / 10
  } else {
    return null
  }
})

let pokemonWeight = computed(() => {
  if (props.pokemon.weight && props.pokemon.weight > 0) {
    return props.pokemon.weight / 10
  } else {
    return null
  }

  
})

// function convertData() {
//   pokemonWeight.value /= 10
//   return pokemonWeight
// }

// convertData()


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
  <div class="sectionContainer">
    <!-- <div :class="pokemon.types[0].type['name']"> -->
    <div
      id="mainCardDiv"
      :class="pokemonType"
      @mouseover="cardHover = true"
      @mouseout="cardHover = false"
    >
      <h2 class="idName">{{ pokemon.id }} {{ pokemon.name }}</h2>
      <img v-if="pokemonImg" :src="pokemonImg" />
      <section class="typeSection">
        <p v-for="(eachType, index) in pokemon.types" :class="eachType.type.name" :key="index">
          {{ eachType.type.name }}
        </p>
      </section>
      <!-- <p v-for="(eachAbility, i) in pokemon.abilities" :key="i">{{ pokemonAbilities }}</p> -->
      <!-- <p v-if="pokemon">{{ pokemon.types[1].type.name }}</p> -->
    </div>

    <section v-if="cardHover" id="abilitySection" :class="pokemonType">
      <p class="pokeScnd" v-for="(eachAbility, i) in pokemon.abilities" :key="i">Ability:  {{ eachAbility.ability.name }}</p>
      <p class="pokeScnd">Heigth:  {{ pokemonHeight }} meters</p>
      <p class="pokeScnd">Weight:  {{ pokemonWeight }} Kg</p>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');

.sectionContainer {
  display: flex;
  gap: 10px;
}

div #mainCardDiv {
  /* width: 300px; */
  /* height: 450px; */
  width: 20vw;
  height: 50vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  font-family: 'Comic Neue', cursive;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid #fff;
  box-shadow: 10px 10px 12px 10px rgba(0, 0, 0, 0.3);
}

div h2 {
  grid-row: 1;
  margin: auto auto;
  padding-top: 10px;
}

div img {
  width: 15vw;
  margin: auto;
}

div h2 {
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin: auto;
}

.typeSection {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  /* padding-bottom: 30px; */
  border-radius: 10px;
  /* margin-bottom: 10px; */
}

#abilitySection {
  width: 20vw;
  height: 50vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  border: 2px solid #fff;
  box-shadow: 10px 10px 12px 10px rgba(0, 0, 0, 0.3);
}
.pokeScnd {
  border: 2px solid #fff;
  font-size: 24px;
  font-family: 'Comic Neue', cursive;
  font-weight: bold;
}

p {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
}

.idName {
  display: flex;
  align-items: center;
}

#pokeAbility {
  border: 2px solid #fff;
  margin-bottom: 50px;
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
  color: #000000;
  border: 2px solid #fff;
}

.steel {
  background: #a8a8c0;
  /* color: #0400ff; */
  color: #fff;
  border: 2px solid #fff;
}

.bug {
  background: #a8b820;
  /* color: #0400ff; */
  color: #fff;
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
  /* color: #0f00ff; */
  color: #fff;
  border: 2px solid #fff;
}

.ice {
  background: #58c8e0;
  /* color: #0400ff; */
  color: #303030;
  border: 2px solid #fff;
}

.fighting {
  background: #a05038;
  color: #f9ff01;
  border: 2px solid #fff;
}

.normal {
  background: #a8a090;
  /* color: #0400ff; */
  color: #fff;
  border: 2px solid #fff;
}

.grass {
  background: #78c850;
  /* color: #0102ff; */
  color: #fff;
  border: 2px solid #fff;
}

.psychic {
  background: #f870a0;
  /* color: #1200ff; */
  color: #fff;
  border: 2px solid #fff;
}

.rock {
  background: #b8a058;
  /* color: #0400ff; */
  color: #fff;
  border: 2px solid #fff;
}

.dark {
  background: #7a5848;
  color: #e8ff01;
  border: 2px solid #fff;
}

.ground {
  background: #e9d6a4;
  /* color: #0d00ff; */
  color: #7a5848;
  border: 2px solid #fff;
}

.poison {
  background: #b058a0;
  color: #ffff00;
  border: 2px solid #fff;
}

.flying {
  background: #98a8f0;
  /* color: #0115ff; */
  color: #fff;
  border: 2px solid #fff;
}
</style>
