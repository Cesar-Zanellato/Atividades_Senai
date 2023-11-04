#include <stdio.h>

int main(void){

    int i, j = 1;

    for (i = 11; i > 0; i /= 3)
        j++;    
    
    printf("%d", j);

    return 0; 
}
// 4