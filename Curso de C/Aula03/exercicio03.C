/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Conversões de tipo
Declarações condicionais
Números inteiros
Números de ponto flutuante
Obtendo entrada do usuário
Impressão na tela
Cenário
Escreva um programa que pegue um número de ponto flutuante, converta-o em um número inteiro e, em seguida, imprima uma descrição do número fornecido. Descrições para números:

números maiores ou iguais a 1 e menores que 2 - .Very bad
números maiores ou iguais a 2 e menores que 3 - .Bad
números maiores ou iguais a 3 e menores que 4 - .Neutral
números maiores ou iguais a 4 e menores que 5 - .Good
números maiores ou iguais a 5 e menores que 6 - .Very good
Quando um número está fora do intervalo dado (1<=x<6), o programa não deve imprimir nada.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
1.5

Produção esperada
Very bad

Entrada de amostra
2.9

Produção esperada
Bad

Entrada de amostra
4.77

Produção esperada
Good


*/
#include <stdio.h>

int main(void){

    float numeroFloat = 1.5;
    int numeroInteiro = (int) numeroFloat;

    if(numeroInteiro >= 1 && numeroInteiro < 2){
        printf("Muito Ruim");

    }else if(numeroInteiro < 3){
        printf("Ruim");

    }else if(numeroInteiro < 4){
        printf("Neutro");

    }else if(numeroInteiro < 5){
        printf("Bom");

    }else if(numeroInteiro < 6){
        printf("Muito Bom");

    }else{
        return 0;
    }

    return 0;
}