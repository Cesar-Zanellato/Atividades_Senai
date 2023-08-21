/* 1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente B) Falar com o RH
C) Falar com o gerente D) Sair

Mostrar mensagens para cada opção!
(DESAFIO: Fazer voltar para o menu caso A, B, C) */

let op

Menu()

function Menu(){

    op = prompt(">>> ESCOLHA A OPÇÃO DESEJADA <<<\n\nA) Falar com a atendente\nB) Falar com o RH\nC) Falar com o gerente\nD) Sair\n").toUpperCase()

        switch(op){

            case 'A':

                alert("ATENDENTE!")
                Menu()
                break

            case 'B':

                alert("RH!")
                Menu()
                break

            case 'C':

                alert("GERENTE!")
                Menu()
                break

            case 'D':

                alert("SAIR!")
                break
                
            default:

                alert("OPÇÃO INVÁLIDA! ESCOLHA NOVAMENTE...")
                Menu()
                break

        }

}