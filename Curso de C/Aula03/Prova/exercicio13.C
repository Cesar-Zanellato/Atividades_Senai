#include <stdio.h>

int main(void){

    int i = 1, j = -2, k;

    k = (i >= 0) && (j >= 0) || (i <= 0) && (j <= 0);
    
    printf("%d", k);

    return 0; 
}
// 0