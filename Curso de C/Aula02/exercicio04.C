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
The value of half is: 0.500000
The value of Pi is: 3.141593
*/
#include <stdio.h>

int main()
{
	float halfValue = 0.6 - 0.1;
	float piValue = 0.14159265 + 3;
	printf("The value of half is: %f\n", halfValue);
	printf("The value of Pi is: %f\n", piValue);
	return 0;
}