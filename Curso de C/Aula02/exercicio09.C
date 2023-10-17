/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Usando operadores,
Construindo expressões simples,
Traduzindo a descrição verbal para a linguagem de programação
Cenário
Dê uma olhada no código que fornecemos no editor: ele atribui dois valores inteiros, manipula-os e, finalmente, produz as variáveis e .resultbigresult

O problema é que as manipulações foram descritas usando linguagem natural, então o código é completamente inútil agora.

Queremos que você atue como um compilador inteligente (naturalmente!) e traduza a fórmula em uma notação de código "C" real.

Teste seu código usando os dados que fornecemos.

Produção esperada
result: 38
big result: 54872
*/
	/* 
		increment xValue by 3
		decrement yValue by xValue
		multiply xValue times yValue giving result
		increment result by result
		decrement result by 1
		assign result modulo result to yValue
		increment result by result added to xValue
		assign result times result times result to bigResult
		increment result by xValue times yValue 
	*/

#include <stdio.h>

int main(void) 
{
	int xValue=5;
	int yValue=9;
	int result;
	int bigResult;
	
	xValue += 3;
	yValue -= xValue;
	result = xValue * yValue;
 	result += result;
 	--result;
 	yValue = result % result;
 	result += result + xValue;
 	bigResult = result * result * result;
 	result += xValue * yValue;
 	
	printf("result: %d\n", result);
	printf("big result: %d\n", bigResult);
	return 0;
}