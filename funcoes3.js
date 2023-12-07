//function soma(numA, numB){
//    return numA + numB
//}
//
//let resultado = soma(5, 143)
//
//console.log("O resultado dessa função é "+resultado)

let username = getFirstName("Felipe Amaral Silveira Cantos")

console.log("Seja bem vindo, "+username)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}