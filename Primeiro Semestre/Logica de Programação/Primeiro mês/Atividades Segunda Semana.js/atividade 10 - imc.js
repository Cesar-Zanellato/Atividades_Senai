/* Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula. (HTML + JS)*/

let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let calculoImc;



function imc(){


    calculoImc = Number((peso.value) / (Number(altura.value) * Number(altura.value))).toFixed(2)

    
    alert(`O seu imc é: ${calculoImc}`)
    

}
