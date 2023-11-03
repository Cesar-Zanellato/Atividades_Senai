/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Imprimindo dados em diferentes formatos
Corrigindo erros em um programa
Cenário
Você tem os dados (incluídos no código) das notas de três alunos (, , ). Escreva um programa para imprimir esses dados em linhas - a primeira linha é um cabeçalho no formato:StudentAStudentBStudentC

Student name  1stYGrade  2ndYGrade  3rdYGrade  Avg

As três linhas seguintes contêm: nome do aluno (, , é suficiente), nota () e a média dessas três séries (). Sua versão do programa deve imprimir o mesmo resultado que a saída esperada. StudentAStudentBStudentC1stYGrade 2ndYGrade 3rdYGradeAvg

Para imprimir apenas dois dígitos de um número de ponto flutuante, use o especificador de formato e, para preenchê-lo com espaços, você pode usar o especificador de formato, onde 9 é o comprimento do número e dos espaços."%.2f""%9.2f"

Produção esperada

Student name  1stYGrade  2ndYGrade  3rdYGrade  Avg
StudentA      4.20       4.50       4.20       4.30
StudentB      4.30       4.40       4.70       4.47
StudentC      4.30       4.80       4.90       4.67
*/
#include <stdio.h>

int main()
{
	float ano1EstudanteA = 4.2;
	float ano2EstudanteA = 4.5;
	float ano3EstudanteA = 4.2;
    float mediaEstudanteA = ((ano1EstudanteA + ano2EstudanteA + ano3EstudanteA) / 3);
	
	float ano1EstudanteB = 4.3;
	float ano2EstudanteB = 4.4;
	float ano3EstudanteB = 4.7;
    float mediaEstudanteB = ((ano1EstudanteB + ano2EstudanteB + ano3EstudanteB) / 3);

	float ano1EstudanteC = 4.3;
	float ano2EstudanteC = 4.8;
	float ano3EstudanteC = 4.9;
    float mediaEstudanteC = ((ano1EstudanteC + ano2EstudanteC + ano3EstudanteC) / 3);


	printf("Nome Estudante     1°Ano           2°Ano           3°Ano          Media\n");
	printf("EstudanteA          %.2f            %.2f            %.2f           %.2f\n", ano1EstudanteA, ano2EstudanteA, ano3EstudanteA, mediaEstudanteA);
	printf("EstudanteB          %.2f            %.2f            %.2f           %.2f\n", ano1EstudanteB, ano2EstudanteB, ano3EstudanteB, mediaEstudanteB);
	printf("EstudanteC          %.2f            %.2f            %.2f           %.2f\n", ano1EstudanteC, ano2EstudanteC, ano3EstudanteC, mediaEstudanteC);
	
	return 0;
}