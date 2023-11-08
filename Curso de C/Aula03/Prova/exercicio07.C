#include <stdio.h>

int main(void){

    int i, j, k;

    i = 0;
    j = 0;

    if(j) j--;
    else  i++;

    if(i) i--;
    else  j++;

    k = i + j;

    printf("%f", k);

    return 0; 
}
// 0