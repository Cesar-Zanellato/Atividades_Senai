/*
Joãozinho mede 1,75m de altura e cresce 1 cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.
*/

let joãozinho = 1.75, pedrinho = 1.60, tempo = 0

while(joãozinho > pedrinho){

joãozinho += 0.01
pedrinho += 0.03
tempo++
}
alert(`${tempo}`)