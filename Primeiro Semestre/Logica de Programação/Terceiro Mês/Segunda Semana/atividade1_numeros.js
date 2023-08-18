/*
Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações.
*/

let addNumeros
let numeros = []
let maiorNum = 0
let resultado = 0

    for(i=0; i<5; i++){

        addNumeros = Number(prompt(`Digite um número: `))

        numeros.push(addNumeros)

        if(addNumeros > maiorNum){

            maiorNum = addNumeros

        }
    }

    for(i=0; i < numeros.length; i++){

        if(numeros[i] != maiorNum){

            addNumeros = maiorNum * numeros[i]
            resultado = resultado + addNumeros
            
        }
    }
    alert(`Vetor: ${numeros} \nMaior número: ${maiorNum} \nSoma das multiplicações: ${resultado}.`)
