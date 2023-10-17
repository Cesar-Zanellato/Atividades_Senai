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
Localhost IP is 127.0.0.1
*/
#include <stdio.h>

int main()
{
	int ipPart1 = 027;
	int ipPart2 = 0;
	int ipPart3 = 0;
	int ipPart4 = 1;

	printf("Localhost IP is %d.%d.%d.%d\n", ipPart1, ipPart2, ipPart3, ipPart4);
}