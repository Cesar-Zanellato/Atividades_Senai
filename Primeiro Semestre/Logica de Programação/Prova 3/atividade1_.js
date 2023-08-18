/*
Em uma colação de grau, 20 alunos do curso Técnico de Informática estarão se formando. Como é necessário fazer uma fila para que os formandos recebam seu diploma, ao chegar no local o aluno deve informar o seu nome e idade, para organização da fila. Caso tenha menos de 25 anos, deve se dirigir ao início da fila, caso tenha 25 ou mais, deve se dirigir ao final da fila. Após a chegada de todos alunos, mostrar uma lista completa com os nomes na ordem que estão na fila.

Critérios de avaliação:

(0,5) Receber nome e idade dos alunos.
(1,0) Adicionar no local correto (início ou fim) da fila.
(0,5) Mostrar a lista completa com os nomes.
*/

let nome = []
let idade = []
let addNome, addIdade


for(i=0; i<20; i++){

    addNome = prompt("Digite o seu nome:")


    addIdade = Number(prompt("Digite a sua idade: "))

    if(addIdade < 25){

        nome.unshift(addNome)
        idade.unshift(addIdade)
        
    }else{

        nome.push(addNome)
        idade.push(addIdade)
    }
}

    console.table(nome)
    console.table(idade)

    alert(nome)