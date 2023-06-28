<script setup>

  import pokemonSearch from "../services/ConnectApi"
    import { ref } from "vue";

  const pokemon = ref();
  const pokemons = [];
  
  for (let i = 0; i < 10; i++){
    const ramdom = Math.floor(Math.random() * 1010);
    pokemon.value = pokemonSearch(ramdom);
    pokemons.push(data.value);
  }

</script>

<main class="flex"></main>

<template id="card">
    <article class="card" v-for="(item, id) in pokemons" :index="id">
        <img src="../assets/images/bg-pattern-card.svg" alt="imagen header card" class="card-header">
        <div class="card-body">
            <img src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{{item.id}}.png`" alt="{{item.name}}" class="card-body-img">
            <h1 class="card-body-title">
                {{ item.name }}
                <span>{{ item.id }}</span>
            </h1>
        </div>
    </article>
</template>

<style scoped>
 html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
  }
  
  body {
    margin: 0;
  }
  
  main {
    display: block;
  }
    
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }
    
  pre {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
    
  a {
    background-color: transparent;
  }
    
  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }
    
  b,
  strong {
    font-weight: bolder;
  }
    
  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
    
  small {
    font-size: 80%;
  }
    
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  img {
    border-style: none;
  }
    
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }
    
  button,
  input { 
    overflow: visible;
  }
    
  button,
  select { 
    text-transform: none;
  }
    
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    --webkit-appearance: button;
  }
    
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
    
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
    
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
    
  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0;
    white-space: normal; 
  }
    
  progress {
    vertical-align: baseline;
  }
    
  textarea {
    overflow: auto;
  }
    
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }
  
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
    
  [type="search"] {
    --webkit-appearance: textfield; 
    outline-offset: -2px; 
  }
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
    
  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }
    
  details {
    display: block;
  }
  
  summary {
    display: list-item;
  }
    
  template {
    display: none;
  }
    
  [hidden] {
    display: none;
  }

:root {
  --dark-cyan: hsl(185, 75%, 39%);
  --very-dark-desaturated: hsl(229, 23%, 23%);
  --dark-grayish-blue: hsl(227, 10%, 46%);
  --dark-gray: hsl(0, 0%, 59%);
}

main {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 62.5%;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}

template {
  font-family: 'Kumbh Sans', sans-serif;
  background-color: var(--dark-cyan);
  background-image: url("../images/bg-pattern-top.svg"), url("../images/bg-pattern-bottom.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: right 50vw bottom 50vh, left 50vw top 50vh;
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 100vh;
}

.card {
  background-color: white;
  width: 326px;
  border-radius: 100vmax;
  padding: .25rem;
  overflow: hidden;
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.card-header {
  width: 100%;
  display: block;
}

.card-body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-bottom: 1px solid rgba(153, 153, 153, 0.383);
}

.card-body-img {
  width: 200px;
  height: 200px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: calc(-48px - 5px);
  background-color: white;
}

.card-body-title {
  margin-top: 2rem;
  font-size: 1.8rem;
  text-transform: capitalize;
}

.card-body-title span {
  color: var(--dark-gray);
  font-weight: 400;
}

.card-body-text {
  color: var(--dark-gray);
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

.card-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
}

.card-footer-social {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.card-footer-social p {
  letter-spacing: 1px;
}

</style>