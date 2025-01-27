const valores = [2, 5, 7, 2, 3, 5, 4]
const valores2 = [8, 9, 12, 7]

const cliente = {
    nome: 'Diogo Varaschin',
    cpf: '123.456.789-10',
    nascimento: '24/02/2003',
    telefone: '9 1111-2222',
    endereco: {
        rua: 'Das Flores',
        cidade: 'Curitiba',
        estado: 'PR',
        pais: 'Brasil',
    },
}

// pega o nome do cluente mas nao descartar o resto
const {nome, ...resto} = cliente
console.log('nome: ', nome)
console.log('resto: ', resto)

// função que soma N valores
function soma (...valores){
    return valores.reduce((acc, next) => acc + next)
}
console.log('soma: ', soma(7,3,10,15,5,60))

// concatenando arrays
const arr = [...valores, ...valores2]
console.log('array: ', arr)

// adicionar um elemento no inicio e no final do array
const arr2 = [999, ...valores, 888]
console.log('arr: ', arr2)

// função que recebe um array de valores, multiplica o primeiro por todos os outros
function multi([primeiro, ...resto]) {
    return resto.map(v => v * primeiro)
}
console.log('multi: ', multi(valores))

// add um novo atributo no objeto cliente: updatedAt
const cli = {...cliente, updatedAp: new Date()}
console.log('cli: ', cli)

// altera o telefone do cliente para '1 1111-1111'
const cli2 = {...cliente, telefone: '1 1111-1111'}
console.log('telefone: ', cli2)