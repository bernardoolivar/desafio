class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}.`)
    }
    assar(){
        console.log(`Assando um bolo de ${this.saborDaMassa}`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("pistache", "creme")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()