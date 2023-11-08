/*
Exemplo do While
*/
#include <stdio.h>

int main(void){
    int number;
    int max = -100000;
    int counter = 0;

    do {
        scanf("%d",&number);
        if(number != -1) 
            counter++;
            if(number > max)
                max = number;
    }
	while (number != -1);
		if(counter)
            printf("O maior número é: %d \n",max);
		else 
			printf("Ei, você não digitou nenhum número!");
    return 0;
}