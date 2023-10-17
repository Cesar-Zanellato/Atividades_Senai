/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Corrigindo erros em um programa
Fazendo contas simples com operadores, variáveis e números
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os, mas não altere nenhum valor numérico.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
The value of ten is: 10
The value of twenty is: 20
*/
#include <stdio.h>

int main()
{
	int tenValue = 3 * 8 % 14;
	int twentyValue = 2 * tenValue + 10 % 5;
	printf("The value of ten is: %d\n", tenValue);
	printf("The value of twenty is: %d\n", twentyValue);
	return 0;
}