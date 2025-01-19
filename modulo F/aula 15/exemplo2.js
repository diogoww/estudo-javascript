var valores = [4,5,3,9,1,7]

/*for (var pos=0; pos<valores.length; pos++){
    console.log(`a posição ${pos} tem o valor de ${valores[pos]}`)
}*/

for (var pos in valores) {
    console.log(`a posicao ${pos} tem o valor de ${valores[pos]}`)
}