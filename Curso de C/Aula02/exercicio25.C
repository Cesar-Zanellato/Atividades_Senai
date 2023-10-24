/*
Você prefere raízes quadradas a quadrados? Não tem problema, mas precisamos lembrar de duas coisas: primeiro, não existe o operador de raiz quadrada; segundo, raízes quadradas de números negativos não existem.

Podemos resolver o primeiro problema encontrando uma função que saiba como calcular a raiz. Essa função existe e usa um argumento do tipo . O resultado também é um (obviamente, o quadrado de um inteiro ainda é um inteiro, mas a raiz de qualquer número nem sempre é um inteiro, como a raiz quadrada de ). floatfloat2

A função que vamos usar é chamada (square root float) e requer apenas um argumento. Ah, mais uma coisa – para usar essa função, você deve incluir um arquivo de cabeçalho chamado .sqrtmath.h

Precisamos lidar com números negativos também. Se você for tão imprudente a ponto de fornecer um número negativo, o programa simplesmente ignorará você e sua entrada completamente. Pode não ser educado, mas pelo menos não vamos tentar dobrar as regras da matemática. Se veremos o resultado ou não, será decidido pela declaração condicional.

Agora direcione sua atenção para o uso de dados de ponto flutuante e a função.sqrt

O programa está no editor.
*/
#include <stdio.h>
#include <math.h>

int main(void) {
    float value, squareroot;

    printf("Give me a number and I will find its square root:\n");
    scanf("%f", &value);
    if(value >= 0.0) {
        squareroot = sqrt(value);
        printf("You have given me: %f\n", value);
        printf("The sqaure root is: %f\n", squareroot);
    }
    return 0;
}