#include <stdio.h>

int main(void){

    int i = 0, j = 1, k;

    k = i << j + j << i;
    
    printf("%d", k);

    return 0; 
}
// 0