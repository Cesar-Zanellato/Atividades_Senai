/*
Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.
*/
let quantidade
let doenca
let transmissao
let virus = []
let bacteria = []
let ambos = []
let total = []

    quantidade = Number(prompt(`Quantas doenças: `))

for(i=0; i<quantidade; i++){

    doenca = prompt("Nome da doença: ").toLowerCase()

    total.push(doenca)

    transmissao = prompt("Forma de transmissao: ").toLowerCase()

    if(transmissao == "virus"){

        virus.push(doenca)
    }else if(bacteria == "bacteria"){

        bacteria.push(doenca)
    }else{

        ambos.push(doenca)
    }
}
alert(`Vírus: ${virus} \nBactéria: ${bacteria} \nAmbos: ${ambos} \nTodas as doenças: ${total}`)