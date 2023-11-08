/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Condições e execuções condicionais com a instrução else
Corrigindo erros em um rogram
Impressão na tela
Cenário
Confira o programa no editor. Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os e tente encontrar condições adequadas para todas as três instruções.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
A Primeira condição é true
Second condition is false
Third condition is true
*/
#include <stdio.h>

int main(void){
	
	int a = 10;
	
	if (a != 9)
		puts("A Primeira condição é: true");
	else
		puts("A Primeira condição é: false");
	
	if (a == 9)
		puts("A Segunda condição é: true");
	else
		puts("A Segunda condição é: false");
	
	if (a == 9 + 1)
		puts("A Terceira condição é: true");
	else
		puts("A Terceira condição é: false");
        
	return 0;
}