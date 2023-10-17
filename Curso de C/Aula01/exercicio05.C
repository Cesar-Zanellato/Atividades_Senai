/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Corrigindo erros em um programa
Números inteiros
Base 8 números
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Use números octais (base 8).

Produção esperada
The value of nine is: 9 
The value of ten is: 10 
*/
#include <stdio.h>

int main()
{
	printf("The value of nine is: %o \n", 9);
	printf("The value of ten is: %o \n", 010);
	return 0;
}