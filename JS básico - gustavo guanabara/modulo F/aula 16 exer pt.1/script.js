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
        window.alert('tudo ok')
    } else {
    window.alert('valor invalido ou ja encontrado na lista')
    }
}