<script setup>
import { onBeforeUpdate, onUpdated, ref, watch } from 'vue'
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
let 	speciesData = ref();
let 	evolutionData = ref();
let		baseForm;
let		evOne = 0;
let		evTwo = 0;
let		baseFormId = ref();
let		evOneId = ref();
let		evTwoId = ref();
let 	baseFormImg = ref();
let 	evOneImg = ref();
let 	evTwoImg = ref();
let 	name = ref();
let 	baseFormName = ref(0);
let 	evOneName = ref(0);
let 	evTwoName = ref(0);
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
	baseForm = 0;
	baseFormImg.value = "";
	baseFormId.value = ""
	evOne = 0;
	evOneImg.value = "";
	evOneId.value = "";
	evTwo = 0;
	evTwoImg.value = 0;
	evTwoId.value = 0;
}

const	ftUpdate = async(evolutionUrl) =>
{
	console.log("updating");
	evolutionData.value = await getData.getData(evolutionUrl);
	baseForm = evolutionData.value.data.chain.species.name;
	console.log(baseForm);
	console.log(evolutionData.value.data.chain.evolves_to.length);
	if (evolutionData.value.data.chain.evolves_to.length !== 0)
	{
		evLine.value = 1;
		evOne = evolutionData.value.data.chain.evolves_to[0].species.name;
		if (evolutionData.value.data.chain.evolves_to[0].evolves_to.length !== 0)
			evTwo = evolutionData.value.data.chain.evolves_to[0].evolves_to[0].species.name;
		else
		{
			evTwo = 0;
			evTwoImg.value = 0;
		}
	}
	else
	{
		evOne = 0;
		evOneImg.value = "";
		evTwo = 0;
		evTwoImg.value = "";
		evLine.value = 0;
	}
	console.log(baseForm);
	console.log(evOne);
	console.log(evTwo);
	if (baseForm === name.value)
	{
		baseForm = 0;
		baseFormImg.value = "";
	}
	if (evOne === name.value)
	{
		evOne = 0;
		evOneImg.value = "";
	}
	if (evTwo === name.value)
	{
		evTwo = 0;
		evTwoImg.value = "";
	}

		
	if (baseForm !== 0)
	{
		baseFormId.value = getId(evolutionData.value.data.chain.species.url);
		baseFormImg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${baseFormId.value}.png`;
		baseFormName.value = baseForm;
	}
	if (evOne !== 0)
	{
		evOneId.value = getId(evolutionData.value.data.chain.evolves_to[0].species.url);
		evOneImg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evOneId.value}.png`;
		evOneName.value = evOne;
	}
	if (evTwo !== 0)
	{
		evTwoId.value = getId(evolutionData.value.data.chain.evolves_to[0].evolves_to[0].species.url);
		evTwoImg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evTwoId.value}.png`;
		evTwoName.value = evTwo;
	}
}

/*const	ftImageLoader = (img) =>
{
	if (img === baseFormName.value)
		return (baseFormImg.value);
	else if (img === evOneName.value)
		return (evOneImg.value);
	else if (img === evTwoName.value)
		return (evTwoImg.value)
}*/

onUpdated(async() =>
{
	//setToBlank();
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
	//evolutionUrl = speciesData.value.data.evolution_chain.url;
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
		<section v-if="baseFormImg" @click="sendData(baseFormId)" class="evolution">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${baseFormId}.png`" class="poke-img"/>
			<h3>{{ ftCapitalize(baseFormName) }}</h3>
		</section>
		<section v-if="evOneImg" @click="sendData(evOneId)" class="evolution">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evOneId}.png`" class="poke-img"/>
			<h3>{{ ftCapitalize(evOneName) }}</h3>
		</section>
		<section v-if="evTwoImg" @click="sendData(evTwoId)" class="evolution">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evTwoId}.png`" class="poke-img"/>
			<h3>{{ ftCapitalize(evTwoName) }}</h3>
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