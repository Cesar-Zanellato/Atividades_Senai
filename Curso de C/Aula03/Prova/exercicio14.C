#include <stdio.h>

int main(void){

    int i, j, k;

    i = 2;
    j = 3;

    if(j) j  ;
    else if(i) i++;
    else j++;
    
    if(j) i  ;
    else if(j) j++;
    else j = 0;

    k = i + j;
    
    printf("%d", k);

    return 0; 
}
// 5