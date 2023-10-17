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

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Depois de corrigir os erros, remova todos os caracteres desnecessários do código. Verifique quais caracteres podem ser deixados sem disparar um erro.

Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
The value of nine is: 9.000000
The value of ten is: 10.000000
*/

#include <stdio.h>

int main()
{
	float tenValue = 10.000000;
	printf("The value of ten is: %f\n", 9.000);
	printf("The value of nine is: %f\n", tenValue);
	return 0;
}