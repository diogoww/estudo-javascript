const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")
const ulElement = document.querySelector("ul")
//const tasks = []

buttonElement.onclick = ev => {
    ev.preventDefault()
    if (inputElement.value){
        const textElement = document.createElement("span")
        textElement.innerHTML = inputElement.value

        const btnElement = document.createElement("button")
        btnElement.innerHTML = "remover"

        const liElement = document.createElement("li")
        liElement.appendChild(textElement)
        liElement.appendChild(btnElement)
        btnElement.onclick = () => {
            ulElement.removeChild(liElement)
        }

        ulElement.appendChild(liElement)
        inputElement.value = ""
        //tasks.push(inputElement.value)
        //console.log(tasks)
    }
}