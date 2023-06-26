export default async function TypeSearch(type){
    try{
        let response=null;
        //console.log(type);
        if(type===""){
            response = await fetch("https://pokeapi.co/api/v2/type"); 
            const data = await response.json();
            return data.results;           
        }
        else{
            //console.log("https://pokeapi.co/api/v2/type/"+type);
            response = await fetch("https://pokeapi.co/api/v2/type/"+type);             
            const data = await response.json();
            return data.pokemon;
        }                
    }
    catch{
        return 404;
    }
    
}