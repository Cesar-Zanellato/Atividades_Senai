/*
Voltamos ao nosso programa que reconhece o maior entre os números inscritos. Vamos convertê-lo duas vezes, usando ambas as instruções. Analise o código e julgue se e como você usaria qualquer um deles.

Você pode ver a variante no editor.break

Note que a única maneira de sair do corpo é executar o como o loop em si é infinito.break(for (;;))

E agora a variante.continue
*/
#include <stdio.h>

int main(void) {
    int number;
    int max = -100000;
    int counter = 0;

    for( ; ; ){
        scanf("%d",&number);
        if(number == -1)
            break;
        counter++;
        if(number > max)
            max = number;
    }
    if(counter)
        printf("O maior número é: %d \n",max);
    else 
        printf("Você está brincando? Você não digitou nenhum número!");
    return 0;
}