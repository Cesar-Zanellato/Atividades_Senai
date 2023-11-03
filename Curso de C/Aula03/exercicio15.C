/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Lidando com bits únicos e grupos de bits
Receber informações do usuário
Números inteiros
Impressão na tela
Cenário
Uma mordida é apenas uma agregação de quatro bits - também podemos chamá-la de meio byte.

Às vezes, usamos os termos mordida baixa e mordida alta para designar bits contendo bits menos significativos (mordida baixa - L) e bits mais significativos (mordida alta - H) dentro de um byte.

Escreva um programa que peça ao usuário um número inteiro menor que 256 e imprima ambos os bits do número. Você não precisa verificar a entrada.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
255

Produção esperada
H nibble: 15
L nibble: 15

Entrada de amostra
63

Produção esperada
H nibble: 3
L nibble: 15

Entrada de amostra
11

Produção esperada
H nibble: 0
L nibble: 11
*/
#include <stdio.h>

int main() {
    int numero;

    printf("Digite um número inteiro menor que 256: ");
    scanf("%d", &numero);

    // Calcula o high nibble (mordida alta) usando shift right
    int highNibble = (numero >> 4) & 0x0F;

    // Calcula o low nibble (mordida baixa) usando a máscara 0x0F (15 em decimal)
    int lowNibble = numero & 0x0F;

    // Imprime os resultados
    printf("H nibble: %d\n", highNibble);
    printf("L nibble: %d\n", lowNibble);

    return 0;
}