/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Tipos e valores de caracteres
Corrigindo erros em um programa
Impressão na tela
Cenário
Confira a programação abaixo. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os, mas você não pode alterar nenhum valor de caractere. Você pode alterar nomes de variáveis. Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
Upper case letters beetween (and with) 'Z' and 'A' is : 26
Lower case letters beetween (and with) 'z' and 'a' is : 26
*/
#include <stdio.h>

int main()
{
	char firstLetter = 'A';
	char firstSmallLetter = 'a';
	char lastLetter = 'Z';
	char lastSmallLetter = 'z';
	printf("Upper case letters beetween (and with) '%c' and '%c' is : %d\n", lastLetter, firstLetter, 26);
	printf("Lower case letters beetween (and with) '%c' and '%c' is : %d\n", lastSmallLetter, firstSmallLetter, 26);
	return 0;
}