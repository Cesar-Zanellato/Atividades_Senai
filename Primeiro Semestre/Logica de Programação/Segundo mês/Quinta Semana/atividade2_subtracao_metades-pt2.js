/*Desenvolva um programa que o usuário digite 10 números, ao final mostre o valor que resultado do somatório da primeira metade dos números menos o somatório da segunda metade.*/

let lista = [];
let addLista = [];
let soma = 0; somaDois = 0;

    for(i=0; i<10; i++){

        addLista = Number(prompt("Digite um número: "))
        lista.push(addLista)
       
        if(i<5){

            soma += addLista
        }else{

            somaDois += addLista
        }
    }

    alert(`Lista: ${lista} \nPrimeira Metade: ${soma} \nSegunda Metade: ${somaDois} \nSubtração: ${soma - somaDois}.`)