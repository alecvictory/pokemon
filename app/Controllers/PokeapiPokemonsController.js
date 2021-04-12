import { ProxyState } from "../AppState.js";
import { pokeapiPokemonsService } from "../Services/PokeapiPokemonsService.js";


//Private
function _draw() {
    let template = ''
    ProxyState.apipokemon.forEach(p => {
        template += `<li class="action hover-action" onclick="app.pokeapiPokemonsController.getPokemon('${p.name}')">${p.name}</li>`
    })
    document.getElementById("api-pokemon").innerHTML = template
}

function _drawActive() {
    document.getElementById('active-pokemon').innerHTML = ProxyState.activepokemon ? ProxyState.activepokemon.Template : '<p> no active pokemon </p>'
}

//Public
export default class PokeapiPokemonsController {
    constructor() {
        ProxyState.on("apipokemon", _draw);
        ProxyState.on('activepokemon', _drawActive)

        // this is used to get all pokemon at the start of app
        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await pokeapiPokemonsService.getAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    async getPokemon(id) {
        try {
            await pokeapiPokemonsService.getPokemon(id)
        } catch (error) {
            console.error(error)
        }
    }
}