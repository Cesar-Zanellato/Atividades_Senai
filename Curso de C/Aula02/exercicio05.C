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
The value of four is: 4
The value of five is: 5
*/

#include <stdio.h>

int main()
{
	int fourValue = 2 + 2 * 1;
	int fiveValue = 2 + 3;
	printf("The value of four is: %d\n", fourValue);
	printf("The value of five is: %d\n", fiveValue);
	return 0;
}