import PokeapiPokemonsController from "./Controllers/PokeapiPokemonsController.js";
import SandboxPokemonsController from "./Controllers/SandboxPokemonsController.js";

class App {
  pokeapiPokemonsController = new PokeapiPokemonsController();
  sandboxPokemonsController = new SandboxPokemonsController();
}

window["app"] = new App();
