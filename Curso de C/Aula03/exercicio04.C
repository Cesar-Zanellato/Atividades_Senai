/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Conversões de tipo
Declarações condicionais
Corrigindo erros em um programa
Números inteiros
Números de ponto flutuante
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Antes de usar o compilador, tente localizar os erros somente pela análise manual de código. Use o número convertido para verificar como arredondar um número flutuante.

Produção esperada
Five is: 5
Rounded to seven: 7
*/
#include <stdio.h>

int main(void){
	float notExactFive = 5.4;
	float notExactNumber = 6.7;
	int exactFive;
	int roundedNumber;
	
    if (notExactNumber - notExactFive > 0.5)
	{
		roundedNumber = (int)notExactNumber + 1;
	}
	else
	{
		roundedNumber = (int) notExactNumber;
	}
	
    exactFive = (int)notExactFive;
	
    printf("Cinco é: %d\n", exactFive);
	printf("Arredondado para sete: %d\n", roundedNumber);
	return 0;
}