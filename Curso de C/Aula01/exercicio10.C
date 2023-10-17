/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Corrigindo erros em um programa
Nomes de variáveis
Números inteiros
Impressão na tela
Cenário
Escreva um programa que calcule e imprima a soma dos dias em todos os quatro trimestres do ano atual. Use variáveis para armazenar esses quatro valores.

Se quiser, você pode usar o código do laboratório anterior, mas aprenderá mais se escrevê-lo do zero.

Produção esperada
Um ano bissexto:
Days in Q1 of the current year: 91
Days in Q2 of the current year: 91
Days in Q3 of the current year: 92
Days in Q4 of the current year: 92

Um ano comum:
Days in Q1 of the current year: 90
Days in Q2 of the current year: 91
Days in Q3 of the current year: 92
Days in Q4 of the current year: 92
*/
#include <stdio.h>

int main(){
    int fevereiroAnoBissexto = 29;
    int fevereiroAnoNormal = 28;

    int diasEmJaneiro = 31;
    // int diasEmFevereiro = fevereiroAnoBissexto;
    int diasEmFevereiro = fevereiroAnoNormal;
    int diasEmMarco = 31;
    int diasEmAbril = 30;
    int diasEmMaio = 31;
    int diasEmJunho = 30;
    int diasEmJulho = 31;
    int diasEmAgosto = 31;
    int diasEmSetembro = 30;
    int diasEmOutubro = 31;
    int diasEmNovembro = 30;
    int diasEmDezembro = 31;

    int primeiroTrimestre = diasEmJaneiro + diasEmFevereiro + diasEmMarco;
    int segundoTrimestre = diasEmAbril + diasEmMaio + diasEmJunho;
    int terceiroTrimestre = diasEmJulho + diasEmAgosto + diasEmSetembro;
    int quartoTrimestre = diasEmOutubro + diasEmNovembro + diasEmDezembro;

    printf("Dias no Primeiro Trimestre: %d\n", primeiroTrimestre);
    printf("Dias no Segundo Trimestre: %d\n", segundoTrimestre);
    printf("Dias no Terceiro Trimestre: %d\n", terceiroTrimestre);
    printf("Dias no Quarto Trimestre: %d\n", quartoTrimestre);
}