window.onload = function onloadEx() {
    let ex1 = document.getElementById('ex')
    ex1.innerHTML = "<label>valor min = 1 | valor max = 50</label><br>"
    + "<input id='min' type='text' onKeyPress='return apenasNum(event)' placeholder='valor min'>"
    + "<input id='max' type='text' onKeyPress='return apenasNum(event)' placeholder='valor max'>"
    + "<input type='button' value='calcular' onclick='exibirNum()'>"
}

function apenasNum(e) {
    let tecla=(window.event)?event.keyCode:e.which
    if (tecla>47 && tecla<58){
       return true 
    } 
    else {
        if (tecla==8 || tecla==0){
           return true 
        } else {
            return false
        }
    }
}

function exibirNum() {
    let min = document.getElementById('min')
    let max = document.getElementById('max')
    if (Number(min.value) < Number(max.value)){
        let alvo = 0
        for (let count = min.value; count < Number(max.value); count++) {
            if (count%2==0 && count%3==0) {
                alvo++
            }
        }
        alert ("a quantidade de num que atende a regra eh " +alvo)
    } else {
        alert ("o numero min eh maior que o max")
    }
}