import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxapi } from "../Services/AxiosService.js";

class SandboxPokemonService {
    async getAllPokemon() {
        let response = await sandboxapi.get()
        ProxyState.sandpokemon = response.data.map(p => new Pokemon(p))
    }
}

export const sandboxPokemonService = new SandboxPokemonService();