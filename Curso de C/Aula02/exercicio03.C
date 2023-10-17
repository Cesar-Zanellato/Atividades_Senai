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

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código. Posteriormente, você pode usar o valor constante de Pi.

Produção esperada
The value of half is: 0.500000
The value of Pi is: 3.141593
*/

#include <stdio.h>

int main()
{
	float halfValue = 0.5;
	float piValue = 3.14159265;
	printf("The value of half is: %f\n", halfValue);
	printf("The value of Pi is: %f\n", piValue);
	return 0;
}