/*
Lemos esse registro da seguinte forma: criamos uma variável chamada ; destina-se a armazenar cinco valores (observe o número entre colchetes) do tipo (que conhecemos pela palavra-chave no início da declaração). Digamos a mesma coisa usando a terminologia apropriada: é uma matriz que consiste em cinco valores do tipo int. Uma vez que tal matriz é chamada de vetor em termos matemáticos, também diremos que essa afirmação declara um vetor de tamanho igual a cinco.numbersintintnumbersint

Todos os elementos de uma matriz têm o mesmo tipo. Não há exceções a essa regra. Existem outras linguagens de programação que permitem o uso de arrays com elementos de vários tipos, mas "C" não é uma delas. Não é, como você pode pensar, uma limitação problemática e pode ser efetivamente evitada, se necessário. No entanto, este é um assunto muito complexo e você tem que esperar algum tempo para a solução para este quebra-cabeça.

É hora de um pouco de intriga. A linguagem "C" adotou a convenção de que os elementos em uma matriz são numerados a partir de 0. Isso significa que o item armazenado no início da matriz terá o número 0. Como há cinco elementos em nossa matriz, o último terá o número 4. Não se esqueça disso. No entanto, você logo se acostumará com isso e se tornará uma segunda natureza.

Elemento	primeiro	segundo	terceiro	quarto	quinto
Índice	[0]	[1]	[2]	[3]	[4]
Antes de prosseguirmos, temos que observar o seguinte: nosso vetor é uma coleção de elementos, mas cada elemento é um escalar.
*/

int numbers[5];

/*
Queremos calcular a soma de todos os valores armazenados na matriz. Declaramos uma variável onde a soma é armazenada e, inicialmente, atribuímos um valor de 0 a ela – seu nome é .numberssum

Em seguida, adicionamos a ele todos os elementos da matriz usando o loop, que é uma ótima ferramenta de processamento de matrizes. Dê uma olhada no trecho no editor.forfor

Vamos falar um pouco sobre esse exemplo.

A variável tomará os valores 0, 1, 2, 3 e 4 nessa ordem e, portanto, indexará a matriz selecionada pelos elementos subsequentes: o primeiro, o segundo, o terceiro, o quarto e o quinto. Cada um desses elementos será adicionado pelo operador à variável, dando o resultado final no final do loop.inumbers+=sum
*/

int numbers[5], sum = 0, i;

for(i = 0; i < 5; i++)
    sum += numbers[i];

/*
A próxima tarefa é atribuir o mesmo valor (por exemplo) a todos os elementos da matriz. 2012
*/

int i, numbers[5];

for(i = 0; i < 5; i++)
   numbers[i] = 2012;

/*
Agora vamos tentar reorganizar os elementos da matriz, ou seja, inverter a ordem dos elementos: vamos trocar em torno do primeiro e do quinto, bem como do segundo e quarto elementos. A terceira vamos deixar intocado.

Pergunta: como podemos trocar os valores de duas variáveis?

Vejamos o trecho no editor – se fizermos algo assim, perderíamos o valor armazenado anteriormente no .variable2

Alterar a ordem das atribuições não nos ajudará. Infelizmente, precisamos de uma terceira variável que sirva como um armazenamento auxiliar.
*/

int variable1 = 1, variable2 = 2;

variable2 = variable1;
variable1 = variable2;

/*
Olhe para o editor - é assim que fazemos.
*/

int variable1 = 1, variable2 = 2, auxiliary;

auxiliary = variable1;
variable1 = variable2; 
variable2 = auxiliary;

/*
Não sabemos como você se sente, mas definitivamente não gostamos disso. É aceitável com uma matriz de cinco elementos, mas com noventa e nove elementos certamente não funcionaria.
*/

/* trocar elementos #1 e #5 */
auxiliary  = numbers[0];
numbers[0] = numbers[4];
numbers[4] = auxiliary;

/* trocar elementos #2 e #4 */
auxiliary  = numbers[1];
numbers[1] = numbers[3];
numbers[3] = auxiliary;

/*
Vamos empregar os serviços de um loop. Observe cuidadosamente como manipulamos os valores dos índices.for

Durante o primeiro giro do loop, a variável será igual a 0, de modo que as instruções no corpo realmente executarão as seguintes operações:i

auxiliary  = numbers[0];
numbers[0] = numbers[4];
numbers[4] = auxiliary;

No segundo turno, será igual a , assim:i1

auxiliary  = numbers[1];
numbers[1] = numbers[3];
numbers[3] = auxiliary;

Como você pode ver, o loop faz o mesmo trabalho, encurtando o código-fonte e tornando-o mais legível.
*/

for(i = 0; i < 2; i++) {
   auxiliary = numbers[i];
   numbers[i] = numbers[4 - i];
   numbers[4 - i] = auxiliary;
}