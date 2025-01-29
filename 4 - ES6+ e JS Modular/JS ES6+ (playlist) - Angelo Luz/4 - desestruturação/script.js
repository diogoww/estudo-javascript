const valores = [88, 1, 99, 3, 4, 2, 7]

const cliente = {
    nome: 'Diogo Varaschin',
    cpf: '111.222.333-44',
    nascimento: '24/02/2003',
    telefone: '(11) 2 3333-4444',
    endereco: {
        rua: 'rua dos ratos',
        cidade: 'arroio dos ratos',
        estado: 'RS',
        pais: 'Brasil',
    }
}

// função que recebe um cliente e retorna apenas o CPF, telefone e a cidade
const {cpf, telefone, endereco:{cidade}} = cliente
console.log(cpf)
console.log(telefone)
console.log(cidade)

function y (cliente){
    console.log(cliente.cpf)
    console.log(cliente.telefone)
    console.log(cliente.cidade)
}

function x ({cpf, telefone, endereco:{cidade}}) {
    console.log('cpf: ', cpf)
    console.log('telefone: ', telefone)
    console.log('cidade: ', cidade)
} 
x(cliente)

// pega o primeiro e o terceiro elemento do array de numeros
const [n1] = valores
console.log('n1: ', n1)

const [v1, , v3] = valores
console.log('v1: ', v1)
console.log('v3: ', v3)