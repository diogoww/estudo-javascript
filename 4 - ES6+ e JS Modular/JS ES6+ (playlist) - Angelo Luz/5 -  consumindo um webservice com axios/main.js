import axios from 'axios'

// primeira maneira: 
/* class Api{
    static async getAddres (cep){
        const response = await (await (axios.get(`https://viacep.com.br/ws/${cep}/json/`))).data
        console.log(response)
    }
}
Api.getAddres('86420000') */

// segunda maneira:
class Api{
    static async getAddress (cep){
        const response = new Address((await (axios.get(`https://viacep.com.br/ws/${cep}/json/`))).data)
        return response
    }
}

class Address{
    constructor({cep, localidade, estado}){
        this.cep = cep
        this.localidade = localidade
        this.estado = estado
    }
}

Api.getAddress('86420000').then(v => {console.log(v)})