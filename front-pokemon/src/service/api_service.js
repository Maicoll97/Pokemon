import config from '../config/config.js';

export async function fetchPokemons() {
    const response = await fetch(config.API_URL_POKEMON); // Cambia esta URL a la de tu API
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}


export async function fetchPokemonEvolution(name) {
    const response = await fetch(`${config.API_URL_POKEMON}?name=${name}`); // Cambia esta URL a la de tu API
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}