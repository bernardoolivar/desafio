class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
        this.attackType = this.attack();
    }

    attack(){
        let attackType
        switch (this.type) {
          case "mago":
            attackType = "magia";
            break;
          case "guerreiro":
            attackType = "espada";
            break;
          case "monge":
            attackType = "artes marciais";
            break;
          case "ninja":
            attackType = "shuriken";
            break;
          default:
            console.log("Classe inválida");
            break;
        }
        return attackType
    }

    write(){
        console.log(`O ${this.type} chamado ${this.name}, de ${this.age} anos, atacou usando ${this.attackType}.`)
    }
}

let newHero = new hero("Bernardo Olivar", 27, "guerreiro")

newHero.write()