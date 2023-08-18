/*
Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.
*/
let multas, valor = 0, pontos = 0, valorMulta, pontosMulta;

multas = Number(prompt(`Digite a quantidade de multas que você deseja cadastrar: `))


    for(i=multas; i>0; i--){

        valorMulta = Number(prompt("Digite o valor da multa em reais: "))
        valor = (valor + valorMulta);

        pontosMulta = Number(prompt("Digite a quantidade de pontos perdidos: "))
        pontos = (pontos + pontosMulta);
    }

    alert(`O valor total das multas foi: R$${valor} \nA quantidade total de pontos perdidos na carteira: ${pontos}.`)

if(pontos >= 21){

    alert("Você está irregular");
}else{

    alert("Você está regular")
}