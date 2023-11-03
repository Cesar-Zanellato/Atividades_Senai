/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Lógica dos loops: fazer - enquanto
Obtendo entrada do usuário
Imprimindo caracteres na tela
Cenário
Escreva um programa que peça ao usuário para inserir um número. Então:

o programa deverá imprimir o número de linhas correspondente ao número inserido;
Cada linha deve conter o número de pares de caracteres igual ao número dessa linha.*#
O "desenho" de saída deve ser semelhante à metade direita de uma pirâmide.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Para fazer esse laboratório, você deve usar dois loops de fazer enquanto.

Contudo:

quando o usuário insere um número menor ou igual a 1, o programa deve imprimir apenas uma linha;
Quando o usuário insere um número maior que 20, o programa deve imprimir apenas vinte linhas.
Entrada de amostra
3

Produção esperada
*#
*#*#
*#*#*#

Entrada de amostra
5

Produção esperada
*#
*#*#
*#*#*#
*#*#*#*#
*#*#*#*#*#

Entrada de amostra
0

Produção esperada
*#
*/
#include <stdio.h>

int main(){
    
    int numeroInserido, linhas = 1, contador;
	
    scanf("%d", &numeroInserido);

    if (numeroInserido <= 1) {
        numeroInserido = 1;
    } else if (numeroInserido > 20) {
        numeroInserido = 20;
    }
	
    while (linhas <= numeroInserido) {
        contador = 1;  

        while (contador <= linhas) {
            printf("*#");
            contador++;
        }

        printf("\n");
        linhas++;
    }

	return 0;
}