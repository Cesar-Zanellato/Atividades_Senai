/*
Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).
*/
let num = 1, fatorial = 0

fatorial = Number(prompt(`Digite um número!`))

for(i=fatorial; i>0; i--){


num = num * fatorial
fatorial--;

}
alert(`${num}`);