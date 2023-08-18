/*
Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e/ou com palavras).
*/
let numeros = []
let addNumeros

    for(i=0; i<6; i++){

        addNumeros = Number(prompt(`Digite um numero`))
        numeros.push(addNumeros)
    
    }
let j = 5
let palindromo = 0

    for(i=0; i<3; i++){

        if(numeros[i] != numeros[j]){

            palindromo++
        }
            j--
    }

    if(palindromo != 0){

        alert("Não é um palíndromo!")
    }else{

        alert("É um palíndromo!")
    }