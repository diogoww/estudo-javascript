const { faker } = require('@faker-js/faker');

const clients = []

for (let index = 0; index < 10; index++){
    const name = faker.person.fullName()
    const email = faker.internet.email(name.split(" ").join("."))
    const phoneNumber = faker.phone.number()
    const birth = faker.date.past({years: 30})

    client = {
        name,
        email,
        phoneNumber,
        birth,
    }

    clients.push(client)
}

console.log(clients)