export default async function ConectarApi(pokemon){
    
        try{
            const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon);
            const data = await respuesta.json();

            console.log(data);

            return "2";
        }
        catch{
            console.log("No existe ese Pokemon");
            return "1"
        }
    
}