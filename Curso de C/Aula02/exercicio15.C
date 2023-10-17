/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Tipos e valores de caracteres
Corrigindo erros em um programa
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os, mas não altere nenhum valor de caractere.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
Diff beetween 'c' and 'a' is : 2
Diff beetween 'a' and 'c' is : -2
*/
#include <stdio.h>

int main()
{
	printf("Diff beetween '%c' and '%c' is : %d\n", 'c', 'a', 2);
	printf("Diff beetween '%c' and '%c' is : %d\n", 'a', 'c', -2);
	return 0;
}