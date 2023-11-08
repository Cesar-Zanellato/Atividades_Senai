#include <stdio.h>

int main(void){

    float x, y;
    int i, j;

    x = 1.5; y = 2.0;
    i = 2;   j = 4;

    x = x * y + (float)i / j;

    printf("%f", x);

    return 0; 
}

// 3.50000