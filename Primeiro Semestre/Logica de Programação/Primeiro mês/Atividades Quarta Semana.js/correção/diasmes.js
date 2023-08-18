/* Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias". */

let mes

    mes = Number(prompt("Digite o número correspondente ao mês:"))

    switch(mes){

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:

            alert("O mês tem 31 dias!")
            break

        case 4:
        case 6:
        case 9:
        case 11:

            alert("O mês tem 30 dias!")
            break

        case 2:

            alert("O mês tem 28 dias!")
            break

        default:

            alert("Volte para Terra!")

    }