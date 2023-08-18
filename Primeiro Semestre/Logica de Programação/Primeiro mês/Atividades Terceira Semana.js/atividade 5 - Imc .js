/*Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).*/
let calculoImc, peso, altura;

    peso = Number(prompt(`Digite o seu peso: `))
    altura = Number(prompt(`Digite a sua altura: `))


    calculoImc = (peso / (altura * altura))

    if(calculoImc < 18){

        alert(`Seu imc é ${calculoImc}.\nVocê está abaixo do peso`)

    }else if(calculoImc >= 18 && calculoImc <= 25){

        alert(`Seu imc é ${calculoImc}.\nVocê está na faixa de peso ideal do seu peso`)

    }else{

        alert(`Seu imc é ${calculoImc}.\nVocê está acima do peso`)

    }