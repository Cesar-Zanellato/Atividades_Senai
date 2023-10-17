/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Condições e execuções condicionais
Corrigindo erros em um programa
Impressão na tela
Cenário
Escreva um pequeno programa que imprima o valor absoluto de um determinado número se o número for menor que zero. Em seguida, ele deve imprimir o valor do número fornecido em uma linha separada.

Seu programa deve imprimir o mesmo resultado que a saída esperada. Teste-o para vários outros casos (números positivos, outros números negativos, etc.)

Produção esperada
The absolute value of -3 is 3
The value of n is -3
*/
#include <stdio.h>

int main(void) 
{
	int numero = -3;
	
	if(numero < 0){
    	printf("The absolute value of %d is: 3\n", numero);
    	printf("The value of n is: %d", numero);
	}
	return 0;
}