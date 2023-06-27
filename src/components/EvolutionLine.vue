<script setup>
import { onUpdated, ref} from 'vue'
import GetData from '../services/getEvData.js';

const props = defineProps(
	{
		data:
		{
			type: Object,
		}
	}
)

const emit = defineEmits(['response']);

const	getData = new GetData();
let 	name = ref();
let 	speciesData = ref();
let 	evolutionData = ref();
let		baseForm = ref({
						base: "", 
						img: "", 
						id: "", 
						name: ""
					});
let		evOne = ref({
						base: "", 
						img: "", 
						id: "", 
						name: ""
					});
let		evTwo = ref({
						base: "", 
						img: "", 
						id: "", 
						name: ""
					});
let 	evLine = ref(0);

const	getId = (url) =>
{
	let	urlParse;
	let	id;

	urlParse = url.replace(/[^0-9]/g, '');
	id = [...urlParse].slice(1).join("");
	return (id);
}

const	setToBlank = () =>
{
	console.log("setting to blank")
	baseForm.value.base = 0;
	baseForm.value.img = "";
	baseForm.value.id = ""
	evOne.value.base = 0;
	evOne.value.img = "";
	evOne.value.id = "";
	evTwo.value.base = 0;
	evTwo.value.img = 0;
	evTwo.value.id = 0;
}

const	ftUpdate = async(evolutionUrl) =>
{
	console.log("updating");
	evolutionData.value = await getData.getData(evolutionUrl);
	baseForm.value.base = evolutionData.value.data.chain.species.name;
	console.log(baseForm.value.base);
	console.log(evolutionData.value.data.chain.evolves_to.length);
	if (evolutionData.value.data.chain.evolves_to.length !== 0)
	{
		evLine.value = 1;
		evOne.value.base = evolutionData.value.data.chain.evolves_to[0].species.name;
		if (evolutionData.value.data.chain.evolves_to[0].evolves_to.length !== 0)
			evTwo.value.base = evolutionData.value.data.chain.evolves_to[0].evolves_to[0].species.name;
		else
		{
			evTwo.value.base = 0;
			evTwo.value.img = 0;
		}
	}
	else
	{
		evOne.value.base = 0;
		evOne.value.img = "";
		evTwo.value.base = 0;
		evTwo.value.img = "";
		evLine.value = 0;
	}
	console.log(baseForm.value.base);
	console.log(evOne.value.base);
	console.log(evTwo.value.base);
	if (baseForm.value.base === name.value)
	{
		baseForm.value.base = 0;
		baseForm.value.img = "";
	}
	if (evOne.value.base === name.value)
	{
		evOne.value.base = 0;
		evOne.value.img = "";
	}
	if (evTwo.value.base === name.value)
	{
		evTwo.value.base = 0;
		evTwo.value.img = "";
	}

		
	if (baseForm.value.base !== 0)
	{
		baseForm.value.id = getId(evolutionData.value.data.chain.species.url);
		baseForm.value.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${baseForm.value.id}.png`;
		baseForm.value.name = baseForm.value.base;
	}
	if (evOne.value.base !== 0)
	{
		evOne.value.id = getId(evolutionData.value.data.chain.evolves_to[0].species.url);
		evOne.value.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evOne.value.id}.png`;
		evOne.value.name = evOne.value.base;
	}
	if (evTwo.value.base !== 0)
	{
		evTwo.value.id = getId(evolutionData.value.data.chain.evolves_to[0].evolves_to[0].species.url);
		evTwo.value.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evTwo.value.id}.png`;
		evTwo.value.name = evTwo.value.base;
	}
}

onUpdated(async() =>
{
	name.value = props.data.name;
	console.log(name.value);
	speciesData.value = await getData.getData(`https://pokeapi.co/api/v2/pokemon-species/${name.value}`);
	console.log(speciesData.value);
	if (typeof speciesData.value !== "string")
	{
		ftUpdate(speciesData.value.data.evolution_chain.url);
	}
	else
	{
		setToBlank();
	}
})

const	ftCapitalize = (word) =>
{
	const	capitalizeFirst = word.charAt(0).toUpperCase();
	const	charsLeft = word.slice(1);

	return (capitalizeFirst + charsLeft);
}

const sendData = async(id) =>
{
	let	data = ref();
	
	data.value = await getData.getData(`https://pokeapi.co/api/v2/pokemon/${id}`);
	console.log(id, data.value.data);
	emit('response', data.value.data);
}
	
</script>

<template>
	<h1 v-if="evLine">Evolution Line</h1>
	<section id="evolution-line">
		<section v-if="baseForm.img" @click="sendData(baseForm.id)" class="evolution">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${baseForm.id}.png`" class="poke-img"/>
			<h3>{{ ftCapitalize(baseForm.name) }}</h3>
		</section>
		<section v-if="evOne.img" @click="sendData(evOne.id)" class="evolution">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evOne.id}.png`" class="poke-img"/>
			<h3>{{ ftCapitalize(evOne.name) }}</h3>
		</section>
		<section v-if="evTwo.img" @click="sendData(evTwo.id)" class="evolution">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evTwo.id}.png`" class="poke-img"/>
			<h3>{{ ftCapitalize(evTwo.name) }}</h3>
		</section>
	</section>
</template>

<style scoped>
	
	#evolution-line
	{
		display: flex;
    	flex-direction: row;
    	justify-content: space-evenly;
    	width: 100%;
	}
	.evolution
	{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 33%;
	}
	.poke-img
	{
		width: 30%;
	}
</style>