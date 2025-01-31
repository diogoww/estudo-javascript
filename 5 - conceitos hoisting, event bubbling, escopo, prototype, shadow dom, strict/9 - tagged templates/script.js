const city = 'curitiba'
const something = 'xD xD xD'
const otherThing = 'lionel messi'

function green(template, ...values) {
    return template.reduce((accumulator, part, i) => {
        return `
            ${accumulator}
            <span class="green">${values[i-1].toUpperCase()}</span>
            ${part}
        `
    })
}

const texto = green`eu moro em ${city}, faço ${something} quando vejo algo do ${otherThing}`

document.body.innerHTML = texto