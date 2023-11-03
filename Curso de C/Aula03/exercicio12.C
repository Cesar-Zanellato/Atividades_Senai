/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Lógica dos loops: para
Invertendo a lógica de loops for
Obtendo entrada do usuário
Imprimindo caracteres na tela
Cenário
Escreva um programa que peça ao usuário para inserir um número e imprima o dobro de linhas que o número inserido.

A primeira metade de cada outra linha contém um caractere no início, tantos espaços quanto o número dessa linha (os números de linha contam a partir de 0 nesta tarefa) e um caractere no final da linha. O segundo tempo é um reflexo espelhado do primeiro.**

O "desenho" de saída deve ser semelhante a uma ponta de seta.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Para fazer essa tarefa, você deve usar dois externos para loops e dois internos para loops.

Você não deve usar nenhuma formatação especial no para imprimir os espaços - basta usar o loop for.printf

Duas exceções:

Quando o usuário insere um número menor ou igual a 1, o programa não imprime nenhuma linha.
Quando o usuário insere um número maior que 20, o programa imprime apenas quarenta linhas.
Entrada de amostra
3

Produção esperada
**
* *
*  *
*  *
* *
**

Entrada de amostra
9

Produção esperada
**
*   *
*    *
*     *
*      *
*       *
*        *
*         *
*          *
*          *
*         *
*        *
*       *
*      *
*     *
*    *
*   *
**
*/

// Não Consegui terminar
#include <stdio.h>

int main() {
    int numero, linhas, espacos, espacos_esquerda, espacos_direita, i, j;

    printf("Digite um número: ");
    scanf("%d", &numero);

    if (numero <= 1) {
        linhas = 0;
        return 0;
    } else if (numero > 20) {
        linhas = 40;
    } else {
        linhas = numero * 2;
    }

    for (i = linhas; i > 0; i--) {

        espacos_esquerda = i;
        espacos_direita = (linhas + 1) - i;

        printf("%d", espacos_esquerda);
        printf("%d", espacos_direita);
        

        if(espacos_esquerda){
            printf("*");
        }
        
        // for (j = numero; j > numero; --j){
        //     printf(" ");
        // }
        

        if (espacos_direita){
            printf("*");
        }

        printf("\n");
    };

    return 0;
}