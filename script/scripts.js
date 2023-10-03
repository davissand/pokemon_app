const pokemonList = document.getElementById("pokemon-list");

// Función asíncrona para obtener los datos de la PokeAPI
async function getPokemonData() {
    try {
        // Hacer una solicitud GET a la PokeAPI para obtener una lista de Pokémon
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
        const data = await response.json();

        console.log(data);
        // Iterar a través de los resultados y agregar los nombres de los Pokémon a la lista en el HTML
        data.results.forEach(pokemon => {
            const listItem = document.createElement("li");
            listItem.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            pokemonList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error al cargar la lista de Pokémon:", error);
    }
}

// Llamar a la función para obtener los datos de la PokeAPI
getPokemonData();
