/*Faça um programa no qual o usuário digite dois números e mostre na tela a multiplicação desses números.*/

//Cria variáveis para armazenar os números
let numeroUm, numeroDois, multiplicaNumeros;

//Recebe dados dos numeros e armazena nas variáveis
numeroUm = Number(prompt("digite o primeiro número: "))
numeroDois = Number(prompt("digite o segundo número: "))

//realiza o calculo e armazena na variável
multiplicaNumeros = (numeroUm * numeroDois).toFixed(2)

//Mostra mensagem com o resultado na tela
alert(`o resultado da multiplicação é ${multiplicaNumeros}`)