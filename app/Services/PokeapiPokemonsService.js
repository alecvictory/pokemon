import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeapi } from "../Services/AxiosService.js";

class PokeapiPokemonsService {
    async getAllPokemon() {
        let response = await pokeapi.get()
        ProxyState.apipokemon = response.data.results
    }

    async getPokemon(id) {
        let response = await pokeapi.get(id)
        ProxyState.activepokemon = new Pokemon(response.data)
    }
}

export const pokeapiPokemonsService = new PokeapiPokemonsService();