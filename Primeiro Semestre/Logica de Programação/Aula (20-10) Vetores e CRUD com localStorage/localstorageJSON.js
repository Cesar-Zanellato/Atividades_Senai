let numero
let numeroArmazenado

    numero = prompt("Digite um numero: ")
    localStorage.setItem('numeros', JSON.stringify(numero))

    numeroArmazenado = JSON.parse(localStorage.getItem('numeros'))
    alert(numeroArmazenado)