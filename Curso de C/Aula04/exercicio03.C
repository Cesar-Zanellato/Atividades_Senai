/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Trabalhando com a instrução switch-case
A instrução break - quando usá-lo e quando não usá-lo
Números inteiros
Impressão na tela
Cenário
Escreva um programa que peça ao usuário para inserir o número de um mês e imprima o número de dias antes deste mês desde o início do ano.

Quando o número não corresponde a um mês (menor que 1 ou maior que 12), o programa imprime: .Error: no such month in my calendar.

Use apenas para calcular a soma dos dias (não use loops).switch

Você não precisa verificar se o ano é ou não um ano bissexto - suponha que seja um ano bissexto.

Se você não consegue lembrar todos os nomes e o número de dias (e, claro, para acelerar sua programação), aqui está uma lista:

1 : Janeiro - 31
2 : Fevereiro - 28 ou 29 (durante um ano bissexto)
3 : Março - 31
4 : Abril - 30
5 : Maio - 31
6 : Junho - 30
7 : Julho - 31
8 : Agosto - 31
9 : Setembro - 30
10 : Outubro - 31
11 : Novembro - 30
12 : Dezembro - 31 - é claro que você não precisa deste valor nesta tarefa
Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
2

Produção esperada
There are 31 days before the given month.

Entrada de amostra
1

Produção esperada
There are 0 days before the given month.

Entrada de amostra
4

Produção esperada
There are 91 days before the given month.

Entrada de amostra
12

Produção esperada
There are 335 days before the given month.

Entrada de amostra
13

Produção esperada
Error: no such month in my calendar.
*/

#include <stdio.h>

int main(void){

    int mes, diasFaltando;

    printf("Digite o número do mês: ");
    scanf("%d", &mes);

    switch (mes){
        case 1:
            diasFaltando = 0;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 2:
            diasFaltando = 31;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 3:
            diasFaltando = 60;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 4:
            diasFaltando = 91;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 5:
            diasFaltando = 121;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 6:
            diasFaltando = 152;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 7:
            diasFaltando = 182;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 8:
            diasFaltando = 213;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 9:
            diasFaltando = 244;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 10:
            diasFaltando = 274;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 11:
            diasFaltando = 305;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        case 12:
            diasFaltando = 335;
            printf("São %d dias antes do mês determinado.", diasFaltando);
            break;
        default:
            printf("Erro: esse número não corresponde a nenhum mês no meu calendário.");
            break;
        }


    return 0;
}