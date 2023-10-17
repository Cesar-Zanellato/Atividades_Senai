/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Condições e execuções condicionais
Corrigindo erros no programa
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os e tente encontrar condições adequadas para todas as três instruções.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
First condition is true
Third condition is true
*/
#include <stdio.h>

int main()
{
	int a = 10;
	if (a != 9)
		puts("First condition is true");
	if (a == 9)
		puts("Second condition is true");
	if (a == 9 + 1)
		puts("Third condition is true");
	return 0;
}