/*
O loop tem uma singularidade interessante. Se omitirmos qualquer um de seus três componentes, presume-se que há um 1 lá:for

for( ; ; ) {
    the body goes here
}

Uma das consequências disso é que um loop escrito dessa forma é um loop infinito (você pode explicar por quê?).

Bem, a expressão condicional não está lá, então é automaticamente assumida como verdadeira. E como a condição nunca se torna falsa, o loop se torna infinito.


Vejamos um pequeno programa no editor. Sua tarefa é escrever alguns dos primeiros poderes de 2.

A variável é usada como uma variável de controle para o loop e indica o valor atual do expoente. A exponenciação em si é substituída pela multiplicação por 2.exp

Como 20 é igual a 1, então 2 × 1 é igual a 2 1, 2 × 21 é igual a 22 e assim por diante. Responda a esta pergunta: qual o maior expoente para o qual nosso programa ainda imprime o resultado?
*/
#include <stdio.h>

int main(void) {
    int exp;
    int pow = 1;

    for(exp = 0; exp < 16; exp++) {
    printf("2 elevado %d é: %d\n", exp, pow);
        pow *= 2;
    }
    return 0;
}