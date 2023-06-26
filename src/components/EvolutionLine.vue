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

const	getData = new GetData();
let 	speciesData = ref();
let 	evolutionData = ref();
//let		evolutionUrl;
let		baseForm;
let		evOne = 0;
let		evTwo = 0;
let		testName; //to delete when in final, to be replaced by name.
let		testH2 = ref();
let	baseFormId = ref();
let	evOneId = ref();
let	evTwoId = ref();
let baseFormImg = ref();
let evOneImg = ref();
let evTwoImg = ref();
let name = ref();
let baseFormName = ref(0);
let evOneName = ref(0);
let evTwoName = ref(0);

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
	console.log(typeof speciesData.value);
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

	/*onUpdated(() => {
	console.log(props.data.name);
	testH2.value = props.data.name;
	//console.log(testH2.value);
	})*/

	//let answer = ref('');
	/*watch(testH2, () =>{
		if (testH2.value !== 0)
			answer.value = testH2.value;
	})*/
	

</script>

<template>
	<h1>Evolution Line</h1>
	<section id="evolution-line">
		<section v-if="baseFormImg" class="evolution">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${baseFormId}.png`" class="poke-img"/>
			<h3>{{ ftCapitalize(baseFormName) }}</h3>
		</section>
		<section v-if="evOneImg" class="evolution">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evOneId}.png`" class="poke-img"/>
			<h3>{{ ftCapitalize(evOneName) }}</h3>
		</section>
		<section v-if="evTwoImg" class="evolution">
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
		justify-content: space-between;
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
		width: 100%;
	}
</style>