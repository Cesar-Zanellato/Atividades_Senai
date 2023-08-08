/*
Fazer um programa para ler nome e salário de dois funcionários. Depois, mostrar o salário
médio dos funcionários.
*/
let media
let Pessoa1 = {

    nome: 'Cesar',
    salario: 560   
}

let Pessoa2 = {

    nome: 'Luigi',
    salario: 750 
}

function MediaSalario(){

    media = (Pessoa1.salario + Pessoa2.salario) / 2
    console.log(media)
}

MediaSalario()