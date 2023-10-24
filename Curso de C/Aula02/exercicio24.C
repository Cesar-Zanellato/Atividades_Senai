/*
Agora vamos mostrar-lhe um programa simples, mas completo, que faz o seguinte:

solicita que o usuário insira um único valor inteiro;
quadra-o;
imprime o resultado com um comentário apropriado.
Nós garantimos que analisar este programa não deve ser qualquer problema para você
*/
#include <stdio.h>

int main(void)
{
    int value, square;

    printf("Give me a number and I will square it!\n");
    scanf("%d", &value);
    
    square = value * value;
    
    printf("You've given me: %d\n", value);
    printf("The squared value is: %d\n", square);
    return 0;
}