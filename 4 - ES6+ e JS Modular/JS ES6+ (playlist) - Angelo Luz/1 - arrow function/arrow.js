// convertendo TODAS para ARROW FUNCTION

// bruto
function proc(age){
    if (age<18){
        return '/index'
    } else {
        return '/home'
    }
}

//convertida
const proc2 = (age) => {
    if (age<18){
        return '/index'
    } else {
        return '/home'
    }
}

// bruto
function sum (v1, v2) {
    return v1 + v2
}

// convertida - NÃO precisa das CHAVES {} e do RETURN
const sum2 = (v1, v2) => v1 + v2

// bruto
function isPositive (v1){
    return v1 > 0
}

// convertida - NÃO precisa dos PARENTESES na variável, das chaves {} e do RETURN
const isPositive = v1 => v1 > 0
