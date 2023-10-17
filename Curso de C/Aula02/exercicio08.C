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
The value of eight is: 8
*/
#include <stdio.h>

int main()
{
	int xValue = 4 * 6 % 5;
	int eightValue = 2 * xValue + 10 % 5;
	printf("The value of eight is: %d\n", eightValue);
	return 0;
}