/*
Em um cassino, os desenvolvedores tiveram a ideia de simular um jogo de roleta com números de 1 a 50 e com 5 tentativas para o jogador. Criar um programa onde o jogador digite seus 5 palpites (números de 1 a 50) e armazene eles em uma lista (vetor). Caso o jogador digite um palpite que não seja de 1 a 50 ou repetido, mostrar uma mensagem de palpite inválido e perguntar novamente, pois não é permitido apostar números fora da faixa de apostas, nem repetidos. Após o jogador escolher os 5 números, mostrar na tela a lista de palpites, para conferência. Em seguida o programa deve gerar um número aleatório de 1 a 50 também e verificar se algum dos 5 palpites do jogador estava correto. Mostrar uma tela com o número sorteado e dizer se o jogador ganhou ou não. Ao final perguntar se ele deseja jogar novamente, caso responda SIM iniciar nova rodada, caso responda NÃO, encerrar o programa.

Critérios de avaliação:

(0,5) Receber os palpites do jogador, armazenar em um vetor e mostrar os palpites.
(1,0) Validar para que os palpites sejam de 1 a 50 e não repetidos.
(1,0) Gerar o número sorteado de 1 a 50.
(1,0) Mostrar uma tela com o número sorteado e o resultado, se acertou ou não.
(0,5) Dar opção ao jogador de jogar novamente ou não.
*/

let palpite = []
let sorteio, add, jogarNovamente


Jogar()

function Jogar(){

    sorteio = Math.floor(Math.random() * (50) + 1)
    palpite = []
    
    for(i=0; palpite.length < 5; i++){

        
        add = Number(prompt("Digite um palpite: "))

            if(add > 0 && add < 50 && palpite.includes(add) == false){

                palpite.push(add)
            }else{

                alert("Digite um palpite valido!")

            }
    }

    if(palpite.includes(sorteio) == true){

        alert(`Numero sorteado: ${sorteio} \nSeu palpite: ${palpite} \nParabens você ganhou!`)

    }else{

        alert(`Numero sorteado: ${sorteio} \nSeu palpite: ${palpite} \nQue pena você não ganhou!`)
    }

    jogarNovamente = prompt("Deseja jogar novamente? (S/N)").toUpperCase()

    if(jogarNovamente == "S"){

        Jogar()
    }
}