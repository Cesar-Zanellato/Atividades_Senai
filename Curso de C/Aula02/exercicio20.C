/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Condições e execuções condicionais
Corrigindo erros em um programa
Impressão na tela
Cenário
Escreva um programa que imprima o nome de um determinado dia da semana. Seu programa deve imprimir o mesmo resultado que a saída esperada.

Teste-o para todos os dias da semana (por enquanto, teste-o apenas para valores válidos).

Produção esperada
The day of the week is: Monday
*/
#include <stdio.h>

int main(void) 
{
	int dayOfWeek = 1;
	if (dayOfWeek == 1){
        printf("O dia da semana é: Segunda");
    }
	if (dayOfWeek == 2){
        printf("O dia da semana é: Terça");
    }
	if (dayOfWeek == 3){
        printf("O dia da semana é: Quarta");
    }
	if (dayOfWeek == 4){
        printf("O dia da semana é: Quinta");
    }
	if (dayOfWeek == 5){
        printf("O dia da semana é: Sexta");
    }
	if (dayOfWeek == 6){
        printf("O dia da semana é: Sábado");
    }
	if (dayOfWeek == 7){
        printf("O dia da semana é: Domingo");
    }
    
    /*
    switch (dayOfWeek){
        case 1:
            printf("O dia da semana é: Segunda");
            break;
        case 2:
            printf("O dia da semana é: Terça");
            break;
        case 3:
            printf("O dia da semana é: Quarta");
            break;
        case 4:
            printf("O dia da semana é: Quinta");
            break;
        case 5:
            printf("O dia da semana é: Sexta");
            break;
        case 6:
            printf("O dia da semana é: Sábado");
            break;
        case 7:
            printf("O dia da semana é: Domingo");
            break;
    }
    */
	return 0;
}