let clients = [
    {name: 'diogo varaschin', birth: 2003, genre: 'M', purchaseDaysAgo: 3},
    {name: 'lionel messi', birth: 1987, genre: 'M', purchaseDaysAgo: 5},
    {name: 'jinx powder', birth: 2008, genre: 'F', purchaseDaysAgo: 1},
    {name: 'hellen martins', birth: 1994, genre: 'F', purchaseDaysAgo: 25},
    {name: 'ronaldinho gaucho', birth: 1980, genre: 'M', purchaseDaysAgo: 14}
]

let ages = [18, 22, 45, 36, 5, 99, 56, 30, 22, 51, 1, 6, 2, 9]
console.log(ages)

// altera todos o valores em +1
ages = ages.map(value => value + 1)
console.log(ages)

// retorna todos os valores impares
const impar = ages.filter(value => (value%2 === 1))
console.log(impar)

// altera todos os valores imapres para o proximo par
ages = ages.map(value => (value%2===1? value+1 : value));
console.log(ages)

// cria um novo array com os valores menores do que 20 
const menores = ages.filter(value => value < 20)
console.log(menores)

// cria um novo array com os valores menores do que 17 e incrementar +1
const menores2 = ages
    .filter(value => value < 17)
    .map(value => value+1)
console.log(menores2)

// retorne a soma de todos os valores menores do que 20
const somaMenores20 = ages
    .filter(value => value < 20)
    .reduce((acc, next) => (acc += next))
console.log(somaMenores20)

console.log(clients)
// incrementa em 1 o purschaseDaysAgo de todos os objetos
let newClients = clients.map(v =>({...v}))
newClients = newClients.map(value => {
    value.purchaseDaysAgo+=1
    return value
})
console.log(newClients)

// verificar se um determinado numero de entrada esta contido no array
console.log(ages.includes(20))
console.log(ages.find(value => value===20))

// altera array para ficar so com o primeiro nome dos clientes
let nameClients = clients.map(value => value.name.split(" ")[0])
console.log(nameClientslients)
