/* function fatorial(x) {
    var fat=1
    for (var c=x; c>1; c--){
        fat*=c
    }
    return fat
}
console.log (fatorial(5)) */

// ou

function fatorial(x){
    if (x==1){
        return 1
    } else {
        return x*fatorial(x-1)
    }
}
console.log(fatorial(10))