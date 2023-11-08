/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Lógica de loops - enquanto
Declarações condicionais
Obtendo entrada do usuário
Números inteiros
Impressão na tela
Cenário
Escreva um programa que pegue dois números inteiros e imprima sua soma. Faça isso até que o usuário insira (zero) (mas imprima a última soma).0

Além disso, se o usuário inserir como o primeiro número e como o segundo número, basta imprimir e encerrar o programa.990Finish.

Use o loop while em seu código.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
1
1
2
0

Produção esperada
Sum: 2
Sum: 2

Entrada de amostra
1
5
99
0

Produção esperada
Sum: 6
Sum: 99
Finish.
*/
#include <stdio.h>

int main(void){

    int primeiroNumero = 1, segundoNumero = 1, somaNumeros;

    do{
        // printf("Digite o primeiro Número: ");
        scanf("%d", &primeiroNumero);
        // printf("Digite o segundo Número: ");
        scanf("%d", &segundoNumero);

        somaNumeros = primeiroNumero + segundoNumero;
        
        printf("Soma dos números: %d\n", somaNumeros);

    }while(primeiroNumero != 0 && segundoNumero != 0);

    printf("Fim.");

    return 0;
}