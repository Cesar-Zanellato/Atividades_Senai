/*
3. Em uma Universidade está sendo realizado um congresso internacional, no qual
os inscritos, no momento da inscrição, podem escolher se participarão dos
minicursos e se precisarão de tradução simultânea.
O valor da inscrição é calculado da seguinte forma:
a. Valor base: R$ 50.00;
b. valor para participar dos minicursos: acréscimo de R$ 20.00 ao valor base;
c. valor para a tradução simultânea: acréscimo de R$ 10.00 ao valor base.
Faça um algoritmo em que o usuário informa se deseja participar dos minicursos (S
ou N) e se precisa de tradução simultânea (S ou N). Depois, calcule e informe o
valor da inscrição a ser pago pelo usuário. Para testar o algoritmo desenvolvido,
inicialize a variável minicurso como S e tradução como S. Dê como saída somente o
valor a ser pago pelo inscrito.
Exemplo de saída:
Questão 3
Valor da Inscrição: R$ 50.00
*/

let minicursos = "S"
let traducao = "S"
let taxa = 50


if(minicursos == "S"){

    taxa += 20 
}

if(traducao == "S"){

    taxa += 10 
}


    console.log(`Questão 3 \nValor da Inscrição: R$ ${taxa}.00`)
