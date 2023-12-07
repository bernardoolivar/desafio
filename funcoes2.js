//function torrar(pao, valor, nome = "cliente"){
//    console.log("Torrada feita com "+ pao)
//    console.log("Torrada feita para "+ nome)
//    console.log("O valor é: "+ valor)
//}
//
//torrar("pão de sal", 10.90)

createStringConnection("db_products", "Felipe", "9876")

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}

