/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Obtendo dados do usuário
Validando a entrada
Processamento dos dados
Imprimindo dados em diferentes formatos
Corrigindo erros em um programa
Cenário
Escreva um programa que peça ao usuário um dia, mês e ano (como valores inteiros separados). Em seguida, deve imprimir o número do dia do ano para o dia, mês e ano determinados.

Esta tarefa é semelhante a um dos laboratórios anteriores, mas desta vez você tem que obter o ano do usuário e verificar se esse ano é um ano bissexto. Você deve usar essas informações (se este é um ano bissexto ou não) para computação. Seu programa deve imprimir o mesmo resultado que a saída esperada. Teste-o por vários dias de anos diferentes (confira alguns deles no papel). Suponha que a entrada do usuário é válida.

Entrada de amostra
1
1
2016

Saída de amostra
The day of the year: 1

Entrada de amostra
31
1
2015

Saída de amostra
The day of the year: 31

Entrada de amostra
1
3
2016

Saída de amostra
The day of the year: 60

Entrada de amostra
31
12
2015

Saída de amostra
The day of the year: 365
*/
#include <stdio.h>

int main(void){

    int valorDia, valorMes, valorAno;
    int qtdeDiasAno = 0;

    printf("Digite o Dia: ");
    scanf("%d", &valorDia);
    printf("Digite o Mês: ");
    scanf("%d", &valorMes);
    printf("Digite o Ano: ");
    scanf("%d", &valorAno);

    if ((valorAno % 4 == 0 && valorAno % 100 != 0) || (valorAno % 400 == 0)) {
        if (valorMes > 2) {
            qtdeDiasAno += 1;
        }
    }

    switch(valorMes - 1) {
        case 12: qtdeDiasAno += 31;
        case 11: qtdeDiasAno += 30;
        case 10: qtdeDiasAno += 31;
        case 9: qtdeDiasAno += 30;
        case 8: qtdeDiasAno += 31;
        case 7: qtdeDiasAno += 31;
        case 6: qtdeDiasAno += 30;
        case 5: qtdeDiasAno += 31;
        case 4: qtdeDiasAno += 30;
        case 3: qtdeDiasAno += 31;
        case 2: qtdeDiasAno += 28;
        case 1: qtdeDiasAno += 31;
    }

    qtdeDiasAno += valorDia;

    printf("O número do dia do ano: %d\n", qtdeDiasAno);

    return 0;
}