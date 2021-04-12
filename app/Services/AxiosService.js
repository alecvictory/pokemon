export const sandboxapi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/class/pokemon'
})

export const pokeapi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})