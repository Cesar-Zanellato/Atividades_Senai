/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Corrigindo erros em um programa
Fazendo contas simples com operadores, variáveis e números
Ordem das operações
Uso de parênteses para alterar a ordem das operações
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os, mas não altere nenhum valor numérico.

No entanto, você pode usar parênteses (você pode adicioná-los ou removê-los). Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar você, tente encontrar os erros apenas pela análise manual de código.

Produção esperada
the result is: 28
the big result is: 59
*/
#include <stdio.h>

int main()
{
	int xValue = 5;
	int yValue = 9;
	int result = (xValue + yValue) * 2;
	int bigResult = (xValue + yValue * 6);
	printf("the result is: %d\n", result);
	printf("the big result is: %d\n", bigResult);
	return 0;
}