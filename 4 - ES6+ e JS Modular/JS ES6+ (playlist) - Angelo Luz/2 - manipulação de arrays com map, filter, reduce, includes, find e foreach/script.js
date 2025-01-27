const clients = [
    {name: 'diogo varaschin', birth: 2003, genre: 'M', purchaseDaysAgo: 3},
    {name: 'messi', birth: 1987, genre: 'M', purchaseDaysAgo: 5},
    {name: 'jinx', birth: 2008, genre: 'F', purchaseDaysAgo: 1},
    {name: 'hellen martins', birth: 1994, genre: 'F', purchaseDaysAgo: 25},
    {name: 'ronaldinho gaucho', birth: 1980, genre: 'M', purchaseDaysAgo: 14}
]

let ages = [18, 22, 45, 36, 5, 99, 56, 30, 22, 51]
console.log(ages)

// altera todos o valores em +1
ages = ages.map(value => value + 1)
console.log(ages)

// retorna todos os valores impares
const impar = ages.filter(value => (value%2 === 1))
console.log(impar)

// altera todos os valores imapres para o proximo par