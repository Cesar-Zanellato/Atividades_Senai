/*
Note que o formato contém quase exclusivamente especificadores – três deles para ser exato. Isso significa que você precisa entregar três argumentos para o formato.

Em nosso exemplo no editor, isso é feito repetindo o mesmo nome de variável três vezes – está correto em todos os aspectos.

A execução deste programa produzirá a mesma variável (ou, mais precisamente, seu valor: ) três vezes – uma vez como um número decimal, uma vez como um número hexadecimal e uma vez como um número octal.31

Como resultado, a tela mostrará a seguinte cadeia de caracteres:

31 1f 37
*/
#include <stdio.h>

int main(void) {
    int i;
    i = 31;
    printf("%d %x %o", i, i, i);
    return 0;
}