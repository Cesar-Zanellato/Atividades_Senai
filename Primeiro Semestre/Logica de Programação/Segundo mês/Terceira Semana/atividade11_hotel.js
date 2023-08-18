/*
Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas. Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).
*/

let hotel = 130, entrou = 0, saiu = 0, rejeitados = 0

hotel /= 2
hotel -= 25

while(hotel >= 0 && hotel <= 40){

    num = Number(prompt(`Digite "1" para cadastrar-se, \nDigite "2" para encerar a sua estadiano hotel.`))

    if(num == 1){

        entrou += Number(prompt(`Digite a quantidade de pessoas que dsejam se cadastrar: `))
        alert(`${entrou}`)
    }
}


