const numero = 99
// numero = 10

const cliente = {
    name: 'diogo',
    age: 99
}

Object.freeze(cliente) // vira uma variavel imutavel

console.log(cliente)

cliente.age=21

console.log(cliente)