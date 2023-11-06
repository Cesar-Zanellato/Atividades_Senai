/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Matrizes
Tipo de caractere
O loop for
Impressão na tela
Cenário
Escreva um programa que preencha uma matriz de 26 elementos com letras de "a" a "z". Tente não usar o tipo int, mas apenas o tipo char para variáveis.

Quando a matriz é preenchida, o programa deve imprimir todos os caracteres em ordem inversa, em seguida, imprimir apenas os elementos da matriz que constituem a palavra "legal".

Descubra a maneira mais simples de descobrir quais elementos devem ser usados.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Produção esperada

z
y
x
w
v
u
t
s
r
q
p
o
n
m
l
k
j
i
h
g
f
e
d
c
b
legal
*/

#include <stdio.h>

int main(void) {
    char alfabeto[26];
    int i;

    for (i = 0; i < 26; i++) {
        alfabeto[i] = 'a' + i;
    }

    for (i = 25; i >= 0; i--) {
        printf("%c\n", alfabeto[i]);
    }

    printf("%c%c%c%c%c\n", alfabeto[11], alfabeto[4], alfabeto[6], alfabeto[0], alfabeto[11]);

    return 0;
}
