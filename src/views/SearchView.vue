<script setup>
import BuscarPokemon from "../services/ConectarApi"

function ChangeButton(){
    
    if(document.querySelector("#searchBar input").value.length>0){
        document.querySelector("#searchBar button:nth-of-type(1)").textContent="Buscalo!"        
    }
    else{
        document.querySelector("#searchBar button:nth-of-type(1)").textContent="A ver que encuentro!"
    }    
}

function Buscar(){
    let valorBusqueda = document.querySelector("#searchBar input").value;
    if(valorBusqueda.length==0){
        valorBusqueda=Math.floor(Math.random()*1281)+1
        if(valorBusqueda>1010){
            valorBusqueda+=8990;
        }
    }else if(isNaN(valorBusqueda))valorBusqueda=valorBusqueda.toLowerCase();
    
    //let respuesta = 
    BuscarPokemon(valorBusqueda);

    //console.log(respuesta);
    document.querySelector("#searchBar input").value="";
}




</script>

<template>

    <section id="searchBar">
        <h3>Busca tu Pokemon por Nombre o Número</h3>
        <form>
            <input type="text" placeholder="Busca un pokemon!" autocomplete="on" size="40" @input="ChangeButton()">
            <button type="button" autofocus @click="Buscar()">A ver que encuentro!</button>
            <button type="reset">Borrar</button>
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