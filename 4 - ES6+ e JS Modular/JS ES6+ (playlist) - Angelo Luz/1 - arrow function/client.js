class Client {
    constructor(name){
        this.name = name
        this.purchaseDaysAgo = 0
    }

    printNameFunction() {
        setInterval(function(){
            //some code
            console.log(this.name)
            console.log(this.purchaseDaysAgo+=1)
        }, 1000)
    }
}

c = new Client("Diogo Varaschin")
c.printNameFunction()