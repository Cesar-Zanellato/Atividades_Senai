let numero
let numeroArmazenado

    numero = Number(prompt("Digite um numero: "))
    localStorage.setItem('numero', numero)

    numeroArmazenado = localStorage.getItem('numero')
    alert(numeroArmazenado)