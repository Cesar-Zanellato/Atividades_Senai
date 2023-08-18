/*
Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados. (DESAFIO: Ao final, dizer a quantidade de números que foram desconsiderados)
*/
let maiorNumero = 0; menorNum = 50; numerosRejeitados = 0; num = 0

for(i=0; i<10; i++){

    num = Number(prompt(`Digite um número entre 0 e 50: `))

    if(num > 50){

        numerosRejeitados++

    }else if(num >= 0 && num < 50){

        if(num > maiorNumero){

            maiorNumero = num 
        }
        if(num < menorNum){

            menorNum = num
        }
    }
}

alert(`O maior número foi: ${maiorNumero}, \nO menor número foi: ${menorNum}, \nA quantidade de números fora da metrica foi: ${numerosRejeitados}.`)