/*
Exemplo While
*/
#include <stdio.h>

int main(void){
    int Evens = 0, Odds = 0;
    int Number;

    scanf("%d", &Number);

    while(Number != 0) {
        if(Number % 2)
            Odds++;
        else
            Evens++;
        scanf("%d", &Number);
    }

    printf("Even numbers: %d\n", Evens);
    printf("Odd numbers: %d\n", Odds);
    return 0;
}