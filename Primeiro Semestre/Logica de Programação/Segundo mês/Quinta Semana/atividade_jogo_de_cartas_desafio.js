/*
Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho OU gerar as cartas aleatoriamente nesse intervalo numérico).
*/
let cartaJUm, cartaJDois, nomeJUm, nomeJDois
let somaJUm = 0, somaJDois = 0


    nomeJUm = prompt("Nome do jogador 1: ")
    nomeJDois = prompt("Nome do jogador 2: ")

    for(i=0; i<5; i++){

        do{
            cartaJUm = Number(prompt(`${nomeJUm} digite uma carta: `))

            if(cartaJUm < 1 || cartaJUm > 13){

                alert("Carta inválida!")
            }
        }
        while(cartaJUm < 1 || cartaJUm > 13)

            somaJUm += cartaJUm
        
        do{
            cartaJDois = Number(prompt(`${nomeJDois} digite uma carta: `))
    
            if(cartaJDois < 1 || cartaJDois > 13){
    
               alert("Carta inválida!")
            }
            }
        while(cartaJDois < 1 || cartaJDois > 13)
    
        somaJDois += cartaJDois 
    }

    if(somaJUm > somaJDois){

        alert(`${nomeJUm} ganhou com ${somaJUm} pontos. \n${nomeJDois} perdeu com ${somaJDois} pontos.`)

    }else if(somaJUm < somaJDois){

        alert(`${nomeJUm} ganhou com ${somaJUm} pontos. \n${nomeJDois} perdeu com ${somaJDois} pontos.`)

    }else{

        alert("O jogo empatou!")
    }