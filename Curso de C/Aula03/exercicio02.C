/*
Nível de dificuldade
Fácil

Objectivos
Familiarize o aluno com:

Grandes números inteiros
Cálculos inteiros simples
Declarações condicionais
Impressão na tela
Cenário
A maneira mais popular e legível por humanos de escrever um IP (para ser mais preciso, IPv4) é escrever quatro números separados por pontos (por exemplo, 127.0.0.1). Mas um endereço IP também pode ser escrito como um número de 32 bits.

Para obter este formulário, você deve multiplicar todas as partes do número IP por potências de 256 (256 * 256 * 256, 256 * 256, 256 e 1 - não use versões pré-computadas).

Escreva um programa que peça ao usuário para fornecer quatro números e, em seguida, verifique se esses números são maiores ou iguais a 0 e menores ou iguais a 255.

Em seguida, o programa deve escrever ambas as formas do endereço IP: o legível por humanos e o número um de 32 bits.

Use o tipo int longo não assinado; Para imprimi-lo, use o formato na função."%lu"printf

Se qualquer uma das partes de endereço não atender aos critérios fornecidos (0<=x<=255), imprima apenas esta mensagem de erro simples: .Inccorect IP Address.

Sua versão do programa deve imprimir o mesmo resultado que a saída esperada.

Entrada de amostra
127
0
0
1

Produção esperada
Human-readable IP address is: 127.0.0.1
IP address as a 32-bit number: 2130706433 

Entrada de amostra
192
168
1
1

Produção esperada
Human-readable IP address is: 192.168.1.1
IP address as a 32-bit number: 3232235777 

Entrada de amostra
1
268
1
1

Produção esperada
Incorrect IP Address.
*/
#include <stdio.h>

int main(){

    int primeiroValor, segundoValor, terceiroValor, quartoValor;
    unsigned long endercoIp = 0;

    printf("Digite o Primeiro Valor: ");
    scanf("%d", &primeiroValor);
    printf("Digite o Segundo Valor: ");
    scanf("%d", &segundoValor);
    printf("Digite o Terceiro Valor: ");
    scanf("%d", &terceiroValor);
    printf("Digite o Quarto Valor: ");
    scanf("%d", &quartoValor);

    if(primeiroValor >= 0 && primeiroValor <= 255 && segundoValor >= 0 && segundoValor <= 255 &&
    terceiroValor >= 0 && terceiroValor <= 255 && quartoValor >= 0 && quartoValor <= 255){

        endercoIp = (unsigned long)primeiroValor * 256 * 256 * 256 +
                    (unsigned long)segundoValor * 256 * 256 +
                    (unsigned long)terceiroValor * 256 +
                    (unsigned long)quartoValor;
    
        printf("Endereço IP legível por humanos: %d.%d.%d.%d\n", primeiroValor, segundoValor, terceiroValor, quartoValor);        
        printf("Endereço IP como número de 32 bits: %lu\n", endercoIp);
    }else{
        printf("Endereço de Ip incorreto.\n");
    };

    return 0;
}