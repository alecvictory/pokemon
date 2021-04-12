export default class Pokemon {
    constructor({ id, name, types, img, height, weight, sprites }) {
        this.id = id
        this.name = name
        this.types = types
        this.image = img || sprites.other.dream_world.front_default
        this.height = height
        this.weight = weight
        this.isSandbox = img != undefined
    }

    get Template() {
        return `
        <div class="bg-white p-3 shadow spell-card">
          <h1>${this.name}</h1>
          <hr>
          <p>TYPE: ${this.types} </p>
          <hr>
          <p>HEIGHT: ${this.height}</p>
          <hr>
          <p>WEIGHT: ${this.weight}</p>
          <hr>
          <img src="${this.image}" alt="">
        </div>
        ${this.Button}
        `
    }

    // get types() {
    //     myTypes = ''
    //     this.types.forEach(t => type += type.name);
    // }


    get Button() {
        if (this.isSandbox) {
            return '<button class="btn btn-outline-danger" onclick="app.sandboxPokemonsController.remove()">RELEASE</button>'
        }
        return '<button class="btn btn-outline-info" onclick="app.sandboxPokemonsController.add()">CATCH</button>'
    }
}