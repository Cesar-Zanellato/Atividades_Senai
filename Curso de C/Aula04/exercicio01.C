/*
caso e switch vs. se
Como você já sabe, um if-cascade é o nome para uma construção de código onde muitas instruções if são colocadas consecutivamente uma após a outra, como no exemplo no editor.

Claro, não há obstáculos para usar e manter código assim, mas há algumas desvantagens que você pode não querer ter que lidar.

Por um lado, quanto mais longa a cascata, mais difícil é ler e entender para que ela é recuada.

Emendar a cascata também é difícil: é difícil adicionar uma nova ramificação a ela e é difícil remover qualquer ramificação criada anteriormente.

Mas a linguagem "C" oferece uma maneira de facilitar as seleções. Queremos enfatizar que isso é realmente mais doce de sintaxe do que qualquer outra coisa. Você pode gerenciar sem ele, mas não hesite em usá-lo quando seus ifs começarem a crescer extensivamente.
*/

if(i == 1)
    puts("Apenas um?");
else if(i == 2)
    puts("Eu quero mais.");
else if(i == 3)
    puts("Nada mal.");
else
    puts("Ok.");

/*
Vamos dar uma olhada no trecho no editor. É um exemplo de como substituir uma cascata por uma instrução especializada. Note que as palavras e são palavras-chave.ifswitchcase

A nova instrução é chamada e é, na verdade, uma mudança. Então, como funciona? switch

Primeiro, o valor da expressão entre parênteses depois que a palavra-chave é avaliada (isso às vezes é chamado de expressão de comutação).switch

Em seguida, o bloco é pesquisado para encontrar um literal precedido pela palavra-chave que é igual ao valor da expressão.case

Quando esse caso é encontrado, as instruções atrás dos dois pontos são executadas. Se houver um entre eles, a execução da instrução é encerrada, caso contrário, todas as instruções são executadas até que o final do bloco seja atingido ou outro seja atendido.breakswitchbreak

O que acontece se a expressão de comutação tiver um valor que não ocorre em nenhum dos casos? A resposta é simples: nada acontecerá – nenhum dos ramos da instrução será executado.switch
*/

switch(i) {
        case 1: puts("Apenas um?"); break;
        case 2: puts("Eu quero mais."); break;
        case 3: puts("Nada mal."); break;
        case 4: puts("Ok.");
}


/*
Vamos modificar os requisitos. Vamos assumir agora que nosso programa está satisfeito (ele diz) se a variável é igual a ou a . Isso significa que temos que criar dois ramos para ambas as possibilidades?Okay.i43

Felizmente não. Podemos colocar mais de um na frente de qualquer filial, como o do editor.case
*/

switch(i) {
        case 1: puts("Apenas um?"); break;
        case 2: puts("Eu quero mais."); break;
        case 3: 
        case 4: puts("Ok.");
}

/*
Também podemos assumir que nosso programa não tem uma opinião quando os valores são diferentes dos especificados até agora e queremos que o programa expresse isso de forma clara. Fizemos um milhão de novos casos cobrindo toda a gama do tipo?iint

Não. Podemos usar um generalizado que cobre todos esses eventos que não foram enumerados nos casos anteriores. Dê uma olhada no código no editor.case

Note que é uma palavra-chave também.default

Não se esqueça de usar o intervalo. Deixar de fora essa palavra-chave é um dos erros mais comuns que os desenvolvedores cometem (não apenas no início de suas carreiras).

Simples, não? E que elegante.

Mas agora mais algumas observações importantes a serem observadas:

o valor após o caso não deve ser uma expressão contendo variáveis ou quaisquer outras entidades cujos valores não sejam conhecidos no momento da compilação;
as ramificações de caso são verificadas na mesma ordem em que são especificadas no programa; Isso significa que as seleções mais comuns devem ser colocadas em primeiro lugar (na verdade, isso pode tornar seu programa um pouco mais rápido em alguns casos).
Agora nos despedimos de nossa declaração; É hora de assumir um desafio importante – vamos discutir matrizes.switch
*/

switch(i) {
        case 1: puts("Apenas um?"); break;
        case 2: puts("Eu quero mais."); break;
        case 3: 
        case 4: puts("Ok"); break;
        default: puts("Não importa.");
}

