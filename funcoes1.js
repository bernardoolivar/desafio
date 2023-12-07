function torrar(){
    console.log("torrando pão")
}

function queimar(){
    console.log("queimando pão")
}

function carvao(){
    console.log("pao carbonizado")
    if(1<3){
        console.log("CU")
    }
}

function processoCompleto(){
    torrar()
    queimar()
    carvao()
}

torrar()
console.log("---------------------------------")
processoCompleto()
console.log("---------------------------------")

function enviarDados(){
    let nomeDoBanco = "banco-de-dados"
    console.log("Salvando dados em: " + nomeDoBanco)

    if(3===3){
        console.log("Senha validada")
    }
}

enviarDados()