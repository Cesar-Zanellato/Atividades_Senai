/*Desenvolva um programa que o usuário digite 10 números, ao final mostre o valor que resultado do somatório da primeira metade dos números menos o somatório da segunda metade.*/

let lista = [];
let addLista = [];
let soma = 0;
let somaDois = 0;

    for(i=0; i<10; i++){

        addLista = Number(prompt("Digite um número: "))
        lista.push(addLista)
        
    }
    
    for(i=0; i < 5; i++){

        soma = Number(lista[0]) + Number(lista[1]) + Number(lista[2]) + Number(lista[3]) + Number(lista[4]) 
        somaDois = Number(lista[5]) + Number(lista[6]) + Number(lista[7]) + Number(lista[8]) + Number(lista[9])

    }

    soma = (soma - somaDois)
    alert(soma)