var num=document.querySelector('input#fnum')
var lista=document.querySelector('select#flist')
var res=document.querySelector('div#res')
var valores=[]

function isNum(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add() {
    if (isNum(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item=document.createElement('option')
        item.text=`valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    } else {
    window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value=''
    num.focus()
}

function end() {
    if (valores.length==0){
        window.alert('adicione valores antes de finalizar')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores){
            soma+=valores[pos]
            if (valores[pos]<menor)
                menor=valores[pos]
            if (valores[pos]>maior)
                maior=valores[pos]
        }
        media=soma/total
        res.innerHTML=''
        res.innerHTML+=`<p>ao todo temos ${total} numeros</p>`
        res.innerHTML+=`<p>o menor valor foi ${menor}</p>`
        res.innerHTML+=`<p>o maior valor foi ${maior}</p>`
        res.innerHTML+=`<p>a soma de todos os valores eh: ${soma}</p>`
        res.innerHTML+=`<p>a media dos valores eh: ${media}</p>`
    }
}