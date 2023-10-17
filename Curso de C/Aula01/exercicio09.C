/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Corrigindo erros no programa
Nomes de variáveis
Números inteiros
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código. Lembre-se de encontrar os erros de lógica (verifique a ordem dos meses).

Se você quiser melhorar os nomes das variáveis, faça isso, mas lembre-se de que os nomes das variáveis devem ser o mais descritivos possível e também os mais curtos possíveis.

Produção esperada
Um ano bissexto:
Days in the first half of the current year: 182
Days in the second half of the current year: 184
Days in the current year: 366

Um ano comum:
Days in the first half of the current year: 181
Days in the second half of the current year: 184
Days in the current year: 365


*/
#include <stdio.h>

int main(){
	// int daysInCurrentFebruary = 29;  Ano Bissexto
	int daysInCurrentFebruary = 28;
	
    int daysInJanuary = 31;
	int daysInFebruary = daysInCurrentFebruary;
	int daysInMarch = 31;
	int daysInApril = 30;
	int daysInMay = 31;
	int daysInJune = 30;
	int daysInJuly = 31;
	int daysInAugust = 31;
	int daysInSeptember = 30;
	int daysInOctober = 31;
	int daysInNovember = 30;
	int daysInDecember = 31;

	int daysInFirstHalf = daysInJanuary + daysInFebruary + daysInMarch + daysInApril + daysInMay + daysInJune;
	int daysInSecondHalf = daysInJuly + daysInAugust + daysInSeptember + daysInOctober + daysInNovember + daysInDecember;

	printf("Days in the first half of the current year: %d\n", daysInFirstHalf);
	printf("Days in the second half of the current year: %d\n", daysInSecondHalf);
	printf("Days in the current year: %d\n", daysInFirstHalf + daysInSecondHalf);

	return 0;
}