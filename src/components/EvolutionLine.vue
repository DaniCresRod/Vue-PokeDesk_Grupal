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

const	newData = new GetData();
let 	given = ref({
						id: "",
					});
let 	speciesData = ref();
let 	evolutionData = ref();
let		baseForm = ref({
						id: "", 
						img: "", 
						name: ""
					});
let		evOne = ref({
						id: "", 
						img: "", 
						name: ""
					});
let		evTwo = ref({
						id: "", 
						img: "", 
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
	baseForm.value.img = "";
	baseForm.value.id = 0
	evOne.value.img = "";
	evOne.value.id = 0;
	evTwo.value.img = "";
	evTwo.value.id = 0;
}

const	ftUpdate = async(evolutionUrl) =>
{
	evolutionData.value = await newData.getData(evolutionUrl);
	baseForm.value.id = Number(getId(evolutionData.value.data.chain.species.url));
	if (evolutionData.value.data.chain.evolves_to.length !== 0)
	{
		evLine.value = 1;
		evOne.value.id = Number(getId(evolutionData.value.data.chain.evolves_to[0].species.url));
		if (evolutionData.value.data.chain.evolves_to[0].evolves_to.length !== 0)
			evTwo.value.id = Number(getId(evolutionData.value.data.chain.evolves_to[0].evolves_to[0].species.url));
		else
		{
			evTwo.value.id = 0;
			evTwo.value.img = 0;
		}
	}
	else
	{
		evOne.value.id = 0;
		evOne.value.img = "";
		evTwo.value.id = 0;
		evTwo.value.img = "";
		evLine.value = 0;
	}
	if (baseForm.value.id === given.value.id)
	{
		baseForm.value.id = 0;
		baseForm.value.img = "";
	}
	if (evOne.value.id === given.value.id)
	{
		evOne.value.id = 0;
		evOne.value.img = "";
	}
	if (evTwo.value.id === given.value.id)
	{
		evTwo.value.id = 0;
		evTwo.value.img = "";
	}
		
	if (baseForm.value.id !== 0)
	{
		baseForm.value.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${baseForm.value.id}.png`;
		baseForm.value.name = evolutionData.value.data.chain.species.name;
	}
	if (evOne.value.id !== 0)
	{
		evOne.value.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evOne.value.id}.png`;
		evOne.value.name = evolutionData.value.data.chain.evolves_to[0].species.name;
	}
	if (evTwo.value.id !== 0)
	{
		evTwo.value.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evTwo.value.id}.png`;
		evTwo.value.name = evolutionData.value.data.chain.evolves_to[0].evolves_to[0].species.name;
	}
}

onUpdated(async() =>
{
	given.value.id = props.data.id;
	speciesData.value = await newData.getData(`https://pokeapi.co/api/v2/pokemon-species/${given.value.id}`);
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
	
	data.value = await newData.getData(`https://pokeapi.co/api/v2/pokemon/${id}`);
	emit('response', data.value.data);
}
	
</script>

<template>
	<h1 v-if="evLine" class="evolution-header">Evolution Line</h1>
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

	@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');
	
	.evolution-header
	{
		font-family: 'Comic Neue';
	}
	#evolution-line
	{
		display: flex;
    	flex-direction: row;
    	justify-content: space-evenly;
    	width: 100%;
		font-family: 'Comic Neue';
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