#include <stdio.h>

int main(void){

    int i, j ,k;

    i = -1;
    j = 1;

    if(i) j--;
    if(j) i++;

    k = i * j;

    printf("%d", k);

    return 0; 
}

// 0