/*Elaborar um programa no qual sejam digitadas 4 notas. Deve ser calculada uma média e mostrada na tela. Se a média for maior ou igual a 7, mostrar uma mensagem "Aprovado", se for menor que 7, mostrar uma mensagem "Reprovado". (DESAFIO: Criar uma terceira condição para recuperação. Exemplo: Menor que 5 reprovado, entre 5 e 7 recuperação, maior ou igual aprovado).*/

let nota1, nota2, nota3, nota4, media;

nota1 = Number(prompt(`Digite a primeira nota: `))
nota2 = Number(prompt(`Digite a sugunda nota: `))
nota3 = Number(prompt(`Digite a terceira nota: `))
nota4 = Number(prompt(`Digite a quarta nota: `))

media = ((nota1 + nota2 + nota3 + nota4) / 4 ).toFixed(1)

    if(media >= 7){

        alert(`Sua média foi : ${media}\nAprovado`)

    }else if(media >= 5 && media <= 7){

        alert(`Sua média foi : ${media}\nRecuperação`)

    }else {

        alert(`Sua média foi : ${media}\nReprovado`)

    }