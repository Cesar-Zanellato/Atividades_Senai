/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Obtendo dados do usuário
Imprimindo dados em diferentes formatos
Corrigindo erros em um programa
Cenário
Escreva um programa que peça ao usuário um dia e um mês (valores inteiros separados para ambos). Em seguida, ele deve imprimir o número do dia do ano para o dia e mês determinados.

Suponha que o ano é um ano bissexto (fevereiro tem 29 dias). Seu programa deve imprimir o mesmo resultado que a saída esperada.

Teste o programa por dias de meses diferentes. Suponha que a entrada do usuário é válida.

Entrada de amostra
1
1

Saída de amostra
Dias no ano: 1

Entrada de amostra
31
1

Saída de amostra
Dias no ano: 31

Entrada de amostra
29
2

Saída de amostra
Dias no ano: 60

Entrada de amostra
31
12

Saída de amostra
Dias no ano: 366
*/
#include <stdio.h>

int main(void){

    int diasNoMes; 
    int meses;

    printf("Quantos dias os meses tem:\n");
    scanf("%d", &diasNoMes);
    printf("Quantos meses tem:\n");
    scanf("%d", &meses);

    int qtdeDiasAno = (diasNoMes * meses);

    if(meses == 12){
        qtdeDiasAno -= 6;
    }
    if(diasNoMes == 29){
        qtdeDiasAno += meses;
    }

    printf("Dias no ano: %d\n", qtdeDiasAno);

    return 0;
}