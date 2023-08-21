/*
 Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta)
*/

let salada = [], addSalada = []

do{

    addSalada = prompt(`Qual fruta adicionar? \nCaso queira finalizar a sua salada digite "cereja". `).toLowerCase()
    salada.push(addSalada)

    if(addSalada == "cereja"){
        alert(`Sua salada de frutas está pronta!`)
    }
    
}while(addSalada != "cereja")

alert(`Sua salada ficou com as seguintes frutas: ${salada}.`)