// convertendo TODAS para ARROW FUNCTION

// bruto
function proc(age){
    if (age<18){
        return '/index'
    } else {
        return '/home'
    }
}

//convertido
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

// convertido - NÃO precisa das CHAVES {} e do RETURN
const sum2 = (v1, v2) => v1 + v2

// bruto
function isPositive (v1){
    return v1 > 0
}

// convertido - NÃO precisa dos PARENTESES na variável, das chaves {} e do RETURN
const isPositive2 = v1 => v1 > 0


//bruto
function init() {
    // imagine um codigo de 1342341 linhas aqui
    console.log('lionel messi')
}

init()

// convertido - ENVOLVER O FUNCTION COM PARENTESES 
(function (name) {
    // imagine um codigo de 1342341 linhas aqui
    console.log(`opa, salve ${name}`)
}) ('lionel messi')


