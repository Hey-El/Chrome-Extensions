
async function fetchData(){
	try{
		const pokemonName = document.getElementById("pokemonName").value
const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)

if (!response.ok){
	throw new Error ("Could not be fetched")
}

const data = await response.json();
const pokemonSprite = data.sprites.front_default;
const imgElement = document.getElementById("pokemonSprite")
imgElement.src = pokemonSprite
console.log(data)

}
	catch (error){
console.log(error)
	}
}

// eventHandlers.js
document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('button');
    confirmButton.addEventListener('click', fetchData);
});

