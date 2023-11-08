#include <stdio.h>

int main(void){

    float x, y;
    int i, j;

    x = 1.5; y = 2.0;
    i = 2;   j = 3;

    x = x * y + i / j;

    printf("%f", x);

    return 0; 
}

// 3.00000