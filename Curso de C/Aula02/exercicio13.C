/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Fazendo contas simples com operadores, variáveis e números
Ordem das operações
Impressão na tela
Cenário
Complete o programa no editor. Calcule a quantidade acumulada de dinheiro com um valor inicial de 100 e uma taxa de juros anual de 1,5%. Calcule e imprima os resultados dos três primeiros anos.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada para cada ano. Calcule cada valor anual com base no valor do ano anterior.

Produção esperada
After first year: 101.500000
After second year: 103.022499
After third year: 104.544998
*/
#include <stdio.h>

int main()
{
	float startValue = 100;
	float interestRate = 0.015;
	float firstYearValue;
	float secondYearValue;
	float thirdYearValue;
	
	firstYearValue = startValue + (startValue * interestRate);
	secondYearValue = firstYearValue + (firstYearValue * interestRate);
	thirdYearValue = secondYearValue + (firstYearValue * interestRate);
	
	printf("After first year: %f\n", firstYearValue);
	printf("After second year: %f\n", secondYearValue);
	printf("After third year: %f\n", thirdYearValue);
	return 0;
}