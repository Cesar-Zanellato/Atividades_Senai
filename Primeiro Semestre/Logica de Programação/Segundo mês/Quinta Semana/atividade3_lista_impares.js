/*Cria um programa onde o usuário digite 5 números. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.*/

let numeros = []
let addNumeros = []
let soma = 0


    for(i=0; i<5; i++){

        addNumeros = Number(prompt("Digite 5 números: "))

        if(addNumeros % 2 == 1){
    
            numeros.push(addNumeros)
            soma += addNumeros
        }
    }

    alert(`Números: ${numeros}, \nSoma: ${soma}.`)
