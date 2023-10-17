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
The value of ten is: 10.000000
The value of twelve is: 12.000000
*/

#include <stdio.h>

int main()
{
	float tenValue = 2 * 3 + 4;
	float twelveValue = (2 * 2.5) + (2 * 3.5) ;
	printf("The value of ten is: %f\n", tenValue);
	printf("The value of twelve is: %f\n", twelveValue);
	return 0;
}