/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Corrigindo erros em um programa
Números de ponto flutuante
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
The value of seven is: 7.000000
The value of eight and a half is: 8.500000
*/
#include <stdio.h>

int main()
{
	printf("The value of seven is: %f\n", 7.0);
	printf("The value of eight and a half is: %f\n", 8.5);
	return 0;
}