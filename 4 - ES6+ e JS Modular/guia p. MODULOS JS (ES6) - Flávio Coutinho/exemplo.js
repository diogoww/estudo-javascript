import {fazCalculoComplexo} from "./script.js"

const qtdeEl = document.querySelector('#quantidade')
const precoEl = document.querySelector('#preco')
const totalEl = document.querySelector('#total')

for (let campoEl of [qtdeEl, precoEl]) {
    campoEl.addEventListener('input', () => {
        const quantidade = parseFloat(qtdeEl.value) || 0
        const preco = parseFloat(precoEl.value) || 0
        const total = fazCalculoComplexo(quantidade, preco)
        totalEl.value = total.toFixed(1)
    })
}