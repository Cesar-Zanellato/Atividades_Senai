/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Obtendo dados do usuário
Validando a entrada
Processamento dos dados
Imprimindo dados em diferentes formatos
Corrigindo erros em um programa
Cenário
Escreva um programa que imprima o nome de um determinado dia da semana. Seu programa deve imprimir o mesmo resultado que a saída esperada. Essa tarefa é semelhante ao laboratório anterior, mas desta vez você precisa obter o dia da semana do usuário e validar a entrada.

Teste o programa para todos os dias da semana (adicione código para imprimir uma mensagem ao usuário quando ele / ela entra em um dia inválido da semana).

Entrada de amostra
1

Saída de amostra
O dia da semana é: Segunda-feira

Entrada de amostra
2

Saída de amostra
O dia da semana é: Terça-feira

Entrada de amostra
9

Saída de amostra
Não existe esse dia: 9. O valor de entrada deve ser de 0 a 6.
*/
#include <stdio.h>

int main(void){

    int valorInserido;

    printf("Insira um valor de 0 a 6 para indentificar o dia da semana.\n");
    scanf("%d", &valorInserido);

    switch (valorInserido){

        case 0: 
            printf("O dia da semana é: Domingo");
            break;
        case 1: 
            printf("O dia da semana é: Segunda-Feira");
            break;
        case 2: 
            printf("O dia da semana é: Terça-Feira");
            break;
        case 3: 
            printf("O dia da semana é: Quarta-Feira");
            break;
        case 4: 
            printf("O dia da semana é: Quinta-Feira");
            break;
        case 5: 
            printf("O dia da semana é: Sexta-Feira");
            break;
        case 6: 
            printf("O dia da semana é: Sábado");
            break;
        
        default:
            printf("Não existe esse dia: %d. O valor de entrada deve ser de 0 a 6.", valorInserido);
            break;
    }

    return 0;
}