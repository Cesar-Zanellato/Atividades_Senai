/*
1. Faça um algoritmo que contenha duas variáveis numéricas (o primeiro recebe o
valor 10 e o segundo recebe o valor 20), denomine as variáveis de a e b. Crie outras
duas variáveis c e d, sendo que as mesmas são calculadas da seguinte forma:
a) o valor de c é o produto dos dois números iniciais;
b) o valor de d é a soma dos três outros números.
Por fim, apresente os valores de cada um dos quatro números e a média dos
mesmos.
Exemplo de saída:
Questão 1
a: 50
b: 100
c: 5000
d: 5150
Média: 2.575
*/

let a = 10
let b = 20
let c = a * b
let d = a + b + c
let media = (a + b + c + d) / 4

console.log(`Questão 1 \na: ${a} \nb: ${b} \nc: ${c} \nd: ${d} \nMédia: ${media}`)