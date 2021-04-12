import { ProxyState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonsService.js";


//Private
function _draw() {
    let template = ""
    ProxyState.sandpokemon.forEach(p => {
        template += `<li class="action hover-action" onclick="app.sandboxPokemonController.setActive('${p.name}')">${p.name}</li>`
    })
    document.getElementById('sand-pokemon').innerHTML = template
}

//Public
export default class SandboxPokemonsController {
    constructor() {
        ProxyState.on("sandpokemon", _draw);
        this.getAllPokemon()
    }

    async getAllPokemon() {
        await sandboxPokemonService.getAllPokemon()
    } catch(error) {
        console.error(error)
    }

}