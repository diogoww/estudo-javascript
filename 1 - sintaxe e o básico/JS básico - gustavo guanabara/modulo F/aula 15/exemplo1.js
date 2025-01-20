var num = [6,2,1]
num [3] = 9
num.push(5)
num.sort()

console.log(`nosso vetor eh ${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor eh ${num[0]}`)
console.log("-----------")
var pos = num.indexOf(4)
//console.log(`o valor 2 esta na posição ${pos}`)
if (pos==-1){
    console.log("o valor nao foi encontrado")
} else {
    console.log(`o valor esta na posicao ${pos}`)
}