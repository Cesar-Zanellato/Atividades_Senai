/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Corrigindo erros em um programa
Números inteiros
Impressão na tela
Cenário
Escreva um programa que calcule e imprima se um determinado ano é ou não um ano bissexto.

Um ano bissexto é um ano que é exatamente (sem um resto) divisível por quatro, exceto por anos que são exatamente divisíveis por 100, mas esses anos são anos bissextos se forem exatamente divisíveis por 400.

Use o operador modulo e alguns operadores lógicos em seu programa e tente escrever apenas uma condição (é claro que agora você pode usar a palavra-chave else).

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
2010

Produção esperada
2010 não é um ano bissexto.

Entrada de amostra
2015

Produção esperada
2015 não é um ano bissexto.

Entrada de amostra
2000

Produção esperada
2000 é um ano bissexto.

Entrada de amostra
1900

Produção esperada
1900 não é um ano bissexto.
*/
#include <stdio.h>

int main() {

    int ano;

    printf("Digite um ano: ");
    scanf("%d", &ano);

    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        printf("%d é um ano bissexto.\n", ano);
    } else {
        printf("%d não é um ano bissexto.\n", ano);
    }

    return 0;
}