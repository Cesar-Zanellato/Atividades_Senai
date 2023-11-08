/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Matrizes
Impressão na tela
Cenário
A sequência de Fibonacci é uma série de números naturais construídos por esta fórmula simples:

O primeiro número de Fibonacci é igual a 1;
O segundo número de Fibonacci é igual a 1 também;
O terceiro, quarto e cada número de Fibonacci subsequente é igual à soma dos dois números anteriores.
Isso significa que os cinco primeiros números de Fibonacci têm a seguinte aparência:

1, 1, 2, 3, 5

Escreva um programa que imprima esta sequência de Fibonacci e dois de seus números subsequentes. Deve imprimir:

os dez primeiros números da sequência de Fibonacci,
em seguida, deve imprimir apenas os números ímpares (1º, 3º, 5º, 7º e 9º),
depois disso, apenas os números pares (2º, 4º, 6º, 8º e 10º).
Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Produção esperada
1
1
2
3
5
8
13
21
34
55
1
2
5
13
34
1
3
8
21
55
*/

#include <stdio.h>

int main(void){

    int fibonacci[12];
    int i;

    fibonacci[0] = 1;
    fibonacci[1] = 1;
    for (i = 2; i < 12; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    printf("\nOs dez primeiros números da sequência de Fibonacci:\n");
    for (i = 0; i < 10; i++) {
        printf("%d, ", fibonacci[i]);
    }

    printf("\nOs números ímpares (1º, 3º, 5º, 7º e 9º):\n");
    for (i = 0; i < 10; i += 2) {
        printf("%d, ", fibonacci[i]);
    }

    printf("\nOs números pares (2º, 4º, 6º, 8º e 10º):\n");
    for (i = 1; i < 10; i += 2) {
        printf("%d, ", fibonacci[i]);
    }

    return 0;
}