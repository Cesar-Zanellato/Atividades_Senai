/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Trabalhando com a instrução switch-case
Impressão na tela
Cenário
Escreva um programa que peça ao usuário para inserir o número de um mês e imprima o nome desse mês na tela.

Quando o número não corresponde a um mês (menor que 1 ou maior que 12), o programa imprime: .Error: no such month in my calendar.

Se você não consegue se lembrar de todos os nomes (e, claro, para acelerar sua programação), aqui está uma lista:

1 : Janeiro
2 : Fevereiro
3 : Março
4 : Abril
5 : Maio
6 : Junho
7 : Julho
8 : Agosto
9 : Setembro
10 : Outubro
11 : Novembro
12 : Dezembro
Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
12

Produção esperada
December

Entrada de amostra
2

Produção esperada
February

Entrada de amostra
15

Produção esperada
Error: no such month in my calendar.
*/

#include <stdio.h>

int main(void){

    int mes;

    printf("Digite o número do mês: ");
    scanf("%d", &mes);

    switch (mes){
        case 1:
            printf("O mês é Janeiro");
            break;
        case 2:
            printf("O mês é Fevereiro");
            break;
        case 3:
            printf("O mês é Março");
            break;
        case 4:
            printf("O mês é Abril");
            break;
        case 5:
            printf("O mês é Maio");
            break;
        case 6:
            printf("O mês é Junho");
            break;
        case 7:
            printf("O mês é Julho");
            break;
        case 8:
            printf("O mês é Agosto");
            break;
        case 9:
            printf("O mês é Setembro");
            break;
        case 10:
            printf("O mês é Outubro");
            break;
        case 11:
            printf("O mês é Novembro");
            break;
        case 12:
            printf("O mês é Dezembro");
            break;
        default:
            printf("Erro: esse número não corresponde a nenhum mês no meu calendário.");
            break;
    }

    return 0;
}