/*
Fazer um programa para ler os dados de duas pessoas, depois mostrar o nome da pessoa
mais velha
*/

let Pessoa1 = {

    nome: 'Cesar',
    idade: 16   
}

let Pessoa2 = {

    nome: 'Luigi',
    idade: 19 
}

function MaiorIdade(){

    if(Pessoa1.idade > Pessoa2.idade){
    console.log(Pessoa1.nome)
    }else{
        console.log(Pessoa2.nome) 
    }
}

MaiorIdade()