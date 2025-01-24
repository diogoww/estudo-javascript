class Client {
    constructor(name){
        this.name = name
        this.purchaseDaysAgo = 0
    }

    // bruto
    printNameFunction() {
        setInterval(function(){
            //some code
            console.log(this.name)
            console.log(this.purchaseDaysAgo+=1)
        }, 1000)
    }

    // convertido - tirou apenas o FUNCTION e o colocou a ARROW FUNCTION () => {}
    printNameFunction2() {
        setInterval(() => {
            //some code
            console.log(this.name)
            console.log(this.purchaseDaysAgo+=1)
        }, 1000)
    }
}

c = new Client("Diogo Varaschin")
c.printNameFunction2()