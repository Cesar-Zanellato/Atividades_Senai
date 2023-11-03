/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Obtendo dados do usuário
Imprimindo dados em diferentes formatos
Corrigindo erros em um programa
Cenário
Escreva um programa que registre dois valores de flutuação. Em seguida, imprima a soma, a diferença e o resultado da multiplicação desses dois valores.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
5.5
5.6

Saída de amostra
Value A: 5.5
Value B: 5.6
5.500000 + 5.600000 = 11.100000.
5.500000 - 5.600000 = -0.100000.
5.500000 * 5.600000 = 30.799999.

Entrada de amostra
9.13
4.18

Saída de amostra
Value A: 9.13
Value B: 4.18
9.130000 + 4.180000 = 13.309999.
9.130000 - 4.180000 = 4.950000.
9.130000 * 4.180000 = 38.163399.
*/
#include <stdio.h>

int main(){

    float valorA = 5.5;
    float valorB = 5.6;
    float valorSoma = valorA + valorB;
    float valorDiferenca = valorA - valorB;
    float valorMultiplicacao = valorA * valorB;

    printf("Valor A: %.2f\n", valorA);
    printf("Valor B: %.2f\n", valorB);
    printf("%f + %f = %f.\n", valorA, valorB, valorSoma);
    printf("%f - %f = %f.\n", valorA, valorB, valorDiferenca);
    printf("%f * %f = %f.\n", valorA, valorB, valorMultiplicacao);

    return 0;
}