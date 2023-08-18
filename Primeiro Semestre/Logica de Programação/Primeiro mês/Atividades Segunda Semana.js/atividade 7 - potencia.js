/* Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação.*/

//Cria variáveis para armazenar os dados
let numeroBase, expoente, numeroFinal;

    //Recebe os dados e armazena nas variáveis
    numeroBase = Number(prompt("digite o número base : "))
    expoente = Number(prompt("digite um número que sera o expoente do número anterior: "))

    //Calcula os dados recebidos
    numeroFinal = numeroBase ** expoente

    //Mostra mensagem com o resultado na tela
    alert(`Esse é o resultado da conta anterior: ${numeroFinal}`)