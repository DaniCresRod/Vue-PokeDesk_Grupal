export default async function ConnectApi(onePokemon){
    
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+onePokemon);
            const data = await response.json();

             console.log(data);

            return data.value;
        }
        catch (error){
            console.log("That Pokemon Doesn't exist! (yet)");
            return "1"
        }
    
}