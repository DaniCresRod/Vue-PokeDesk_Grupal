<script setup>
import { onUpdated, ref, watch } from 'vue'
import GetData from '../services/getEvData.js';

const props = defineProps(
	{
		name:
		{
			type: String,
			default: "",
		},
		data:
		{
			type: Object,
		}
	}
)

const	getData = new GetData();
let 	speciesData = ref();
let 	evolutionData = ref();
let		evolutionUrl;
let		baseForm;
let		evOne = 0;
let		evTwo = 0;
let		testName; //to delete when in final, to be replaced by name.
let		testH2 = ref();

/*onUpdated(() => {
	console.log(props.data);
	testH2 = props.data;
})*/
testH2.value = 0;
testName = "carracosta";
speciesData.value = await getData.getData(`https://pokeapi.co/api/v2/pokemon-species/${testName}`);
evolutionUrl = speciesData.value.data.evolution_chain.url;
evolutionData.value = await getData.getData(evolutionUrl);
baseForm = evolutionData.value.data.chain.species.name;
console.log(evolutionData.value.data.chain.evolves_to.length);
if (evolutionData.value.data.chain.evolves_to.length !== 0)
{
	evOne = evolutionData.value.data.chain.evolves_to[0].species.name;
	if (evolutionData.value.data.chain.evolves_to[0].evolves_to.length !== 0)
		evTwo = evolutionData.value.data.chain.evolves_to[0].evolves_to[0].species.name;
}
console.log(baseForm);
console.log(evOne);
console.log(evTwo);
if (baseForm === testName)
	baseForm = 0;
if (evOne === testName)
	evOne = 0;
if (evTwo === testName)
	evTwo = 0;

let	getImg = ref();
let baseFormImg;
let evOneImg;
let evTwoImg;

if (baseForm !== 0)
{
	getImg.base = await getData.getData(`https://pokeapi.co/api/v2/pokemon/${baseForm}`);
	baseFormImg = getImg.base.data.sprites.other['official-artwork'].front_default;
}
if (evOne !== 0)
{
	getImg.one = await getData.getData(`https://pokeapi.co/api/v2/pokemon/${evOne}`);
	evOneImg = getImg.one.data.sprites.other['official-artwork'].front_default;
}
if (evTwo !== 0)
{
	getImg.two = await getData.getData(`https://pokeapi.co/api/v2/pokemon/${evTwo}`);
	evTwoImg = getImg.two.data.sprites.other['official-artwork'].front_default;
}

const	ftCapitalize = (word) =>
{
	const	capitalizeFirst = word.charAt(0).toUpperCase();
	const	charsLeft = word.slice(1);

	return (capitalizeFirst + charsLeft);
}

	onUpdated(() => {
	console.log(props.data.data.name);
	testH2.value = props.data.data.name;
	console.log(testH2.value);
	})

	let answer = ref('');
	watch(testH2, () =>{
		if (testH2.value !== 0)
			answer.value = testH2.value;
	})
	

</script>

<template>
	<h1>Testing species</h1>
	<h2>{{ answer }}</h2>
	<section id="evolution-line">
		<section v-if="baseForm" class="evolution">
			<img :src="baseFormImg" class="poke-img"/>
			<h3>{{ ftCapitalize(baseForm) }}</h3>
		</section>
		<section v-if="evOne" class="evolution">
			<img :src="evOneImg" class="poke-img"/>
			<h3>{{ ftCapitalize(evOne) }}</h3>
		</section>
		<section v-if="evTwo" class="evolution">
			<img :src="evTwoImg" class="poke-img"/>
			<h3>{{ ftCapitalize(evTwo) }}</h3>
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