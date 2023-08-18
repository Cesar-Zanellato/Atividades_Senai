/*
Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e/ou com palavras).
*/
let vetorPalavra = []
let palavraDigitada


        palavraDigitada = prompt(`Digite uma palavra`)
        
        vetorPalavra = palavraDigitada.split('')
    
        alert(vetorPalavra)

let j = vetorPalavra.length-1
let metadeVetor = Math.trunc(vetorPalavra.length/2)
let palindromo = 0

    for(i=0; i < metadeVetor; i++){

        if(vetorPalavra[i] != vetorPalavra[j]){

            palindromo++
        }
            j--
    }

    if(palindromo != 0){

        alert("Não é um palíndromo!")
    }else{

        alert("É um palíndromo!")
    }