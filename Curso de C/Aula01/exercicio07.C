/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Corrigindo erros em um programa
Nomes de variáveis
Números inteiros
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Se você quiser melhorar os nomes das variáveis, faça isso, mas lembre-se de que os nomes das variáveis devem ser o mais descritivos possível e também os mais curtos possíveis.

Produção esperada
One hour is 3600 seconds
*/
#include <stdio.h>

int main()
{
	int seconds = 60;
	int minutes = 60;
	printf("One hour is %d seconds\n", seconds * minutes);
	return 0;
}