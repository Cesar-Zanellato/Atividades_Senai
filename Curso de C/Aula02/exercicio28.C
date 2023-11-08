/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Obtendo dados do usuário
Imprimindo dados em diferentes formatos
Corrigindo erros em um programa
Cenário
Escreva um programa que tenha dois valores: uma contagem dos dias em uma semana e o valor de Pi. Em seguida, imprima esses dois valores. Não se esqueça dos tipos de dados.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
7
3.14

Saída de amostra
Quantos dias na semana: 7
O valor de Pi para dois pontos: 3,14
Há 7 dias na semana.
O valor de Pi é 3,140000.
*/
#include <stdio.h>

int main(){

    int diasSemana = 7;
    float valorPi = 3.14;

    printf("Quantos dias na semana: %d\n", diasSemana);
    printf("O valor de Pi para dois pontos: %.2f\n", valorPi);
    printf("Há %d dias na semana.\n", diasSemana);
    printf("O valor de Pi é %.2f\n", valorPi);

    return 0;
}