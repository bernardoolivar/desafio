
function compRankCalc(numV, numD){
    let winsLosses = numV - numD
    return winsLosses
}

let resultCompRankCalc = compRankCalc(30, 21)

let compRank = ""
if (resultCompRankCalc<=10){
    compRank = "Ferro"
} else if (resultCompRankCalc>10 && resultCompRankCalc<=20){
    compRank = "Bronze"
} else if (resultCompRankCalc>20 && resultCompRankCalc<=50){
    compRank = "Prata"
} else if (resultCompRankCalc>50 && resultCompRankCalc<=80){
    compRank = "Ouro"
} else if (resultCompRankCalc>80 && resultCompRankCalc<=90){
    compRank = "Diamante"
} else if (resultCompRankCalc>90 && resultCompRankCalc<=100){
    compRank = "Lendário"
} else{
    compRank = "Imortal"
}

console.log("O herói tem saldo de "+resultCompRankCalc+" e está no nível "+compRank+".")