let numeroUm = document.getElementById("num1")
let numeroDois = document.getElementById("num2")
let resultado = document.getElementById("baixo")
let soma

function SomaNumeros(){

    soma = Number(numeroUm.value) + Number(numeroDois.value)
    resultado.innerHTML = "<br>" + "Resultado: " + soma

}