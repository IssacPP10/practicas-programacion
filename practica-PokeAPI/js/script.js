//Hecho por Ricardo Issac Puentes Palacios//
let pokemontxt = document.getElementById('pokemon');
let pokemons = document.getElementById("pokemon-others");
let nombre;
let habil;
function buscarPokemon () {
	if (pokemontxt.value == "") {
		alert('Error! La caja de texto esta vacia');
	}
	else{
		//console.log(pokemontxt.value);
		respuestaPokemon(pokemontxt.value);
	}
}

function respuestaPokemon (idNombre) {
	fetch('https://pokeapi.co/api/v2/pokemon/'+ idNombre)
	.then(response => {
		if (!response.ok) {
			throw new Error(`Error HTTP: ${response.status}`);
		}
		return response.json();
	})
	.then(function contenido(pokemon) {
		pokemons.innerHTML = `<div class="col-sm border padre">
							  <p class="size hijo">Nombre: ${pokemon.name}</p>
							  </div>
							  <div class="col-sm border padre">
							  <p class="size hijo">Habilidad: ${pokemon.abilities[0].ability.name}</p>
							  </div>
							  <div class="col-sm border padre">
							  <img src="${pokemon.sprites.front_default}" alt="pokemon" class="hijo" height="175px">
							  </div>`;

	})
	.catch(error => {
		console.log(error);
		alert('Error! No se encontro el pokemon');
	}) 
}



				