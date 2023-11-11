/*
Quantos passes precisamos para classificar toda a matriz?

Respondemos fazendo o seguinte: introduzimos outra variável; sua tarefa é observar se alguma troca foi feita durante o passe ou não; Se não houve troca, então a matriz já está classificada e nada mais precisa ser feito.

Declaramos uma variável nomeada e atribuímos um valor a ela para indicar que não houve trocas. Caso contrário, ele será atribuído .swapped01
*/

int numeros[5]; /* matriz a ser classificada  */
int i, auxiliar; 

    for(i = 0; i < 4; i++) {

        if( numeros[i] > numeros[i + 1]) {
            // troca de elementos
        auxiliar = numeros[i];
        numeros[i] = numeros[i + 1];
        numeros[i + 1] = auxiliar;
        }
    }

/*
Você não deve ter nenhum problema para ler ou entender o programa:

int numeros[5];
int i, auxiliar;
int troca;

do { 
    troca = 0;  

    for(i = 0; i < 4; i++) 
        if(numeros[i] > numeros[i + 1]) {
            troca = 1;
            auxiliar = numeros[i];
            numeros[i] = numeros[i + 1];
            numeros[i + 1] = auxiliar;
        }
} while(troca);

Olhe para o editor - você pode ver um programa completo lá, enriquecido por uma conversa com o usuário e permitindo que o usuário insira e imprima elementos da matriz.
*/

#include <stdio.h> 
int main(void) {
        int numeros[5];
        int i, auxiliar;
        int troca;
        
        for(i = 0; i < 5; i++) {
            printf("Insira o valor #%i\n",i + 1);
            scanf("%d",&numeros[i]);
        }
        
        // Ordenando
        do {
            troca = 0;
            for(i = 0; i < 4; i++) {
                if(numeros[i] > numeros[i + 1]) {
                    troca = 1;
                    auxiliar = numeros[i];
                    numeros[i] = numeros[i + 1];
                    numeros[i + 1] = auxiliar;
                }
            }
        } while(troca);
        
        printf("\nMatriz classificada: ");
        for(i = 0; i < 5; i++)
            printf("%d ",numeros[i]);
        
		printf("\n");
        return 0;
}