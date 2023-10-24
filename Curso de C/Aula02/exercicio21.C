/*
Dê uma olhada no exemplo no editor.

A função executa o seguinte trabalho para nós:printf

analisa o formato e quando não encontra nenhum especificador, coloca a string na tela;The year is 
neste ponto, encontra um especificador e aprende com ele que há um que deve ser exibido como um número decimal; ele recupera o primeiro argumento após o formato (a variável) e a tela mostra o número printfintVarInt2012;
printf retoma a revisão do formato e exibe a cadeia de caracteres The radius is denoted as;
em seguida, outro especificador é encontrado; desta vez, que exige que o programa exiba o valor do tipo como um único caractere; o caractere é retirado do segundo argumento após o formato () e o caractere é exibido;charVarCharr
printf retoma a revisão do formato e exibe a cadeia de caracteres while PI is equal to ;
O próximo (e último) especificador requer que ele exiba um valor float, que é retirado do terceiro argumento após o formato ().VarFloat
Na verdade, a seguinte cadeia de caracteres aparecerá na tela:

The year is 2012. The radius is denoted as r while PI is equal to 3.141500
*/
#include <stdio.h>

int main(void) {
    int VarInt;
    char VarChar;
    float VarFloat;
	
    VarInt = 2012;
    VarChar = 'r';
    VarFloat = 3.1415;
	 
    printf("The year is %d. The radius is denoted as %c while PI is equal to %f", 
	        VarInt, VarChar, VarFloat);
    return 0;
}