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

No entanto, você pode usar parênteses (você pode adicioná-los ou removê-los). Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
the result is: 20
the small result is: 5
*/
#include <stdio.h>

int main()
{
	int xValue = 3;
	int yValue = 2;
	int result = (xValue + yValue) * (2 + yValue);
	int smallResult = (xValue + yValue) * (4 - xValue);
	printf("the result is: %d\n", result);
	printf("the small result is: %d\n", smallResult);
	return 0;
}