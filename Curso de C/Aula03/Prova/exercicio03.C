#include <stdio.h>

int main(void){

    int i, j;
    i = 1; j = 1;

    while(i < 16){
        i += 4;
        j++;
    }

    printf("%d", j);

    return 0; 
}

// 5