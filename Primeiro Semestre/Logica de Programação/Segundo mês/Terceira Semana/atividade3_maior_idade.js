/*
Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)
*/

let idade = 0, idadeSoma = 0, maiorIdade = 0
let nome, nomeFinal

for(i=0; i<5; i++){

nome = prompt(`Digite um nome: `)
idade = Number(prompt(`Digite sua idade ${nome}: `))
if(idade > maiorIdade){

    nomeFinal = nome
    maiorIdade = idade
}

idadeSoma = (idadeSoma + idade)

}
idadeSoma = (idadeSoma / 5)
alert(`${idadeSoma}\n${nomeFinal}\n${maiorIdade}`)