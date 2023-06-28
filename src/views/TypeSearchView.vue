<script setup>

import { onMounted, onBeforeMount, ref } from 'vue'
import TypeSearch from "../services/TypeSearchService"
import SelectedTypePokemonComponent from '../components/SelectedTypePokemonComponent.vue';

const typesOfPokemon=ref();
const myTypeOfPokemon=ref();
const myArray=ref([]);



onBeforeMount(() => {

  typesOfPokemon.value = TypeSearch("");

  (typesOfPokemon.value).then(x => {
      let mainDiv = document.getElementById("AdvancedSearchTopics");

      let mainDiv_innerUl = mainDiv.appendChild(document.createElement("ul"));

      for (var i = 0; i < x.length-2; i++) {
        let eachLi=mainDiv_innerUl.appendChild(document.createElement("li"));
        eachLi.textContent = x[i].name;
        eachLi.classList.add(x[i].name);
        
        document.querySelector("#AdvancedSearchTopics li:nth-of-type("+(i+1)+")").addEventListener("click", (event)=>{
          document.getElementById("ShowAdvancedSearch").classList.add("invisible");
          document.getElementById("SearchingSign").classList.remove("invisible");

          let response=TypeSearch(event.target.textContent);
          myTypeOfPokemon.value=event.target.textContent;

          response.then((x)=>{
            document.getElementById("ShowAdvancedSearch").classList.remove("invisible");
            document.getElementById("SearchingSign").classList.add("invisible");
            myArray.value=[];

            for(let i=0; i<x.length ; i++){
                
              if((x[i].pokemon.url).split('/')[6]<=1010){
                  (myArray.value).push(x[i]);
              }
                
            }
          });
            
        })
      }        
  });    
})

onMounted(() => {
    document.getElementById("ArrowOpenMoreOptions").addEventListener("click", ()=>{
    document.getElementById("AdvancedSearchTopics").classList.toggle("invisible");
   
    if(document.getElementById("ArrowOpenMoreOptions").style.rotate===180+"deg"){
        document.getElementById("ArrowOpenMoreOptions").style.rotate=0+"deg";
        document.getElementById("ShowAdvancedSearch").classList.add("invisible");
    }
    else{
        document.getElementById("ArrowOpenMoreOptions").style.rotate=180+"deg";
    }
    
    });
})

let emit=defineEmits(['sendDatos']);
function RetrieveFromGrandson(data){
     emit('sendDatos', data);
}


</script>

<template>

<div id="typeSearchBar">
    <h3>Advanced Search</h3>

    <div id="AdvancedSearchTopics" class="invisible">
    </div>
    <div id="SearchingSign" class="invisible">
      Buscando...
    </div>
    <div id="ShowAdvancedSearch" class="invisible" v-if="myArray">
        <hr/>
        <ul>
            <SelectedTypePokemonComponent v-for="eachPokemon in myArray" :key="eachPokemon" :class="myTypeOfPokemon" :pokemon="eachPokemon.pokemon" @send-datos="RetrieveFromGrandson"></SelectedTypePokemonComponent>
        </ul>
        
    </div>

    <img src="../assets/Images/ArrowMore.png" alt="Show More" id="ArrowOpenMoreOptions">

</div>

</template>

<style scoped>
#typeSearchBar{border: 1px solid black;
    margin:0 auto;
    width: 80vw;
    font-family: 'Comic Neue', cursive;
    border-radius: 24px;
    background-color: #3951ED;

    text-align: center;
}

#ShowAdvancedSearch{
    width: 75vw;
    margin:0 auto;
}

#SearchingSign{
  z-index: 2;
  position:relative;
  top: -15vh;
  background: white;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: larger;
}

h3{
    color:white;
    font-weight: bold;
    font-size: x-large;
    margin: 1vh auto;
}

.invisible{
    display: none;    
}

#typeSearchBar :deep(ul) {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-direction: row;
    gap: 1vw;
}

#typeSearchBar :deep(li){
    padding: 0.5vh 4vw;
    border-radius: 5px;
    text-transform: capitalize;
    font-weight: bold;
    border:2px solid white;
}

:deep().fire {
  background-color: #f05030;
}

:deep().water {
  background-color: #3899f8;
}

:deep().electric {
  background: #f8d030;
}

:deep().steel {
  background: #a8a8c0;
}

:deep().bug {
  background: #a8b820;
}

:deep().dragon {
  background: #7860e0;
}

:deep().ghost {
  background: #6060b0;
}

:deep().fairy {
  background: #e79fe7;
}

:deep().ice {
  background: #58c8e0;
}

:deep().fighting {
  background: #a05038;
}

:deep().normal {
  background: #a8a090;
}

:deep().grass {
  background: #78c850;
}

:deep().psychic {
  background: #f870a0;
}

:deep().rock {
  background: #b8a058;
}

:deep().dark {
  background: #7a5848;
}

:deep().ground {
  background: #e9d6a4;
}

:deep().poison {
  background: #b058a0;
}

:deep().flying {
  background: #98a8f0;
}
</style>