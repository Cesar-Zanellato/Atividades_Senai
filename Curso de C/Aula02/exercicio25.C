/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Imprimindo dados em diferentes formatos
Corrigindo erros em um programa
Cenário
De acordo com a ISO 8601, muitos países usam o formato de data AAAA-MM-DD, onde AAAA é um ano de quatro dígitos, MM significa um mês de dois dígitos e DD significa um dia de dois dígitos (uma letra significa nenhum zero à esquerda). As convenções locais podem variar e, às vezes, incluem formatos como DD-MM-AAAA ou DD-MM-AAAA.

Sua tarefa é imprimir valores em quatro formatos diferentes. Confira o programa no editor.

Encontre todos os possíveis erros de compilação e erros lógicos. Corrija-os, mas não altere nenhum valor de caractere. Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Antes de usar o compilador, tente localizar os erros somente pela análise manual de código.

Produção esperada
2016-02-20 - YYYY-MM-DD format - ISO 8601
02-20-2016 - MM-DD-YYYY format
20-02-2016 - DD-MM-YYYY format
20-2-2016 - D-M-Y format
*/
#include <stdio.h>

int main()
{
	int day = 20;
	int month = 2;
	int year = 2016;
	printf("%d-0%d-%d - YYYY-MM-DD format - ISO 8601\n", year, month, day);
	printf("0%d-%d-%d - MM-DD-YYYY format\n", day, month, year);
	printf("%d-0%d-%d - DD-MM-YYYY format\n", month, day, year);
	printf("%d-%d-%d - D-M-Y format\n", day, month, year);
	return 0;
}