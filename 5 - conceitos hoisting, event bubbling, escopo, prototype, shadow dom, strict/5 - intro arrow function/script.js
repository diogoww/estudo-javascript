const brasil = ['curitiba', 'são paulo', 'carlópolis']

const love = brasil.map(function(name){
    return `eu amo ${name}`
})

const loveArrow = brasil.map((name) => {
    return `eu amo ${name}`
})

const loveArrowSingle = brasil.map(name => {
    return `eu amo ${name}`
})

const loveArrowOneLine = brasil.map(name => `eu amo ${name}`)

const loveChain = brasil
    .filter(name => name === 'carlópolis')
    .map(name => `eu gosto de ${name}`)

console.log(loveChain)