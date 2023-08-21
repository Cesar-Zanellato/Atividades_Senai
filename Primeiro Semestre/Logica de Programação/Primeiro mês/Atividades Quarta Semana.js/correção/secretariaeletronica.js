/* 1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente B) Falar com o RH
C) Falar com o gerente D) Sair

Mostrar mensagens para cada opção!
(DESAFIO: Fazer voltar para o menu caso A, B, C) */

let op

    op = prompt(">>> ESCOLHA A OPÇÃO DESEJADA <<<\n\nA) Falar com a atendente\nB) Falar com o RH\nC) Falar com o gerente\nD) Sair\n").toUpperCase()

        switch(op){

            case 'A':

                alert("ATENDENTE!")
                break

            case 'B':

                alert("RH!")
                break

            case 'C':

                alert("GERENTE!")
                break

            case 'D':

                alert("SAIR!")
                break
                
            default:

                alert("OPÇÃO INVÁLIDA, TCHAU!")

        }

