<script setup>
import { onUpdated, ref, watch } from 'vue'
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
let		evolutionUrl;
let		baseForm;
let		evOne = 0;
let		evTwo = 0;
let		testName; //to delete when in final, to be replaced by name.
let		testH2 = ref();
let	getImgA = ref();
let	getImgB = ref();
let	getImgC = ref();
let baseFormImg = ref();
let evOneImg = ref();
let evTwoImg = ref();
let name = ref();
let baseFormName = ref(0);
let evOneName = ref(0);
let evTwoName = ref(0);

/*onUpdated(() => {
	console.log(props.data);
	testH2 = props.data;
})*/
onUpdated(async() =>
{
	name.value = props.data.name;
	console.log(name.value);
	testH2.value = 0;
	testName = "carracosta";
	speciesData.value = await getData.getData(`https://pokeapi.co/api/v2/pokemon-species/${name.value}`);
	evolutionUrl = speciesData.value.data.evolution_chain.url;
	evolutionData.value = await getData.getData(evolutionUrl);
	baseForm = evolutionData.value.data.chain.species.name;
	console.log(baseForm);
	console.log(evolutionData.value.data.chain.evolves_to.length);
	if (evolutionData.value.data.chain.evolves_to.length !== 0)
	{
		evOne = evolutionData.value.data.chain.evolves_to[0].species.name;
		if (evolutionData.value.data.chain.evolves_to[0].evolves_to.length !== 0)
			evTwo = evolutionData.value.data.chain.evolves_to[0].evolves_to[0].species.name;
	}
	else
	{
		evOne = 0;
		evTwo = 0;
		evOneImg.value = "";
		evTwoImg.value = "";
	}
	console.log(baseForm);
	console.log(evOne);
	console.log(evTwo);
	if (baseForm === name.value)
		baseForm = 0;
	if (evOne === name.value)
		evOne = 0;
	if (evTwo === name.value)
		evTwo = 0;
		
	if (baseForm !== 0)
	{
		getImgA.value = await getData.getData(`https://pokeapi.co/api/v2/pokemon/${baseForm}`);
		baseFormImg.value = getImgA.value.data.sprites.other['official-artwork'].front_default;
		baseFormName.value = baseForm;
	}
	if (evOne !== 0)
	{
		getImgB.value = await getData.getData(`https://pokeapi.co/api/v2/pokemon/${evOne}`);
		evOneImg.value = getImgB.value.data.sprites.other['official-artwork'].front_default;
		evOneName.value = evOne;
	}
	if (evTwo !== 0)
	{
		getImgC.value = await getData.getData(`https://pokeapi.co/api/v2/pokemon/${evTwo}`);
		evTwoImg.value = getImgC.value.data.sprites.other['official-artwork'].front_default;
		evTwoName.value = evTwo;
	}
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

	let answer = ref('');
	/*watch(testH2, () =>{
		if (testH2.value !== 0)
			answer.value = testH2.value;
	})*/
	

</script>

<template>
	<h1>Testing species</h1>
	<h2>{{ testH2 }}</h2>
	<section id="evolution-line">
		<section v-if="baseForm" class="evolution">
			<img :src="baseFormImg" class="poke-img"/>
			<h3>{{ ftCapitalize(baseFormName) }}</h3>
		</section>
		<section v-if="evOne" class="evolution">
			<img :src="evOneImg" class="poke-img"/>
			<h3>{{ ftCapitalize(evOneName) }}</h3>
		</section>
		<section v-if="evTwo" class="evolution">
			<img :src="evTwoImg" class="poke-img"/>
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