#include <stdio.h>

int main(void){

    int i = 1, j = -2;

    for (;;){
        i ^= 3;
        j++;    

        if(i > 30) break;
    }
    
    printf("%d", j);

    return 0; 
}
// 3 N
// 0 N
