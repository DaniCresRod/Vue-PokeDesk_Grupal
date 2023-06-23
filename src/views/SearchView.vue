<script setup>
import pokemonSearch from "../services/ConnectApi"
import { ref } from "vue";



const data = ref();


function ChangeButton(){
    
    if(document.querySelector("#searchBar input").value.length>0){
        document.querySelector("#searchBar button:nth-of-type(1)").textContent="Find It!"        
    }
    else{
        document.querySelector("#searchBar button:nth-of-type(1)").textContent="Find whatever!"
    }    
}

let emit=defineEmits(['sendDatos']);

function Search(){
    let searchValue = document.querySelector("#searchBar input").value;
    if(searchValue.length==0){
        searchValue=Math.floor(Math.random()*1010)+1
        
    }else if(isNaN(searchValue))searchValue=searchValue.toLowerCase();    
    
    data.value = pokemonSearch(searchValue);

    //(data.value).then(x=>console.log(x));    
    
    (data.value).then( x=> emit('sendDatos', x)); 

    document.querySelector("#searchBar input").value="";
}

</script>

<template>

    <section id="searchBar">

        <h3>Look up your Pokemon name or number</h3>
        <form>
            <input type="text" placeholder="Busca un pokemon!" autocomplete="on" size="40" @input="ChangeButton()">
            <button type="button" @click="Search()">Find whatever!</button>
            <button type="reset">Delete</button>
        </form>
        
    </section>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');

#searchBar{border: 1px solid black;
    margin:0 auto;
    width: 80vw;
    font-family: 'Comic Neue', cursive;
    border-radius: 5px;
    background-color: #3951ED;
}

h3{
    color:white;
    font-weight: bold;
    margin-left: 2vw;
    font-size: x-large;
}

form{
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1vh 1vw;    
    
    max-width: 100%;
}

input{
    margin: auto 4vw;
    border-radius: 5px;
    padding: 1vh 1vw;
    font-family: 'Comic Neue', cursive; 
    background: #FFD857;

    max-width: 100%;    
}

button{
    width: 13vw;
    background: #ECC139;
    border-radius: 5px;
    margin: auto 0.5vw;
    padding: 1vh 1vw;
    font-family: 'Comic Neue', cursive;
    font-weight: bold;   
    overflow-wrap: break-word; 
    
    min-width: 15vw;
}

button:hover{
    background: #FFD857;
    transform: scale(1.1);
}


</style>