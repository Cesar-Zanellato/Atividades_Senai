/*
Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.
*/
let num, resultado = 0, impar = 0


for(i=5; i>0; i--){

    num = Number(prompt("Digite um número!"))
        
    if(num % 2 == 0){

        resultado = resultado + num
    }else{

        impar++
    }
}

if(impar > 0){

    alert(`${impar} dos números digitados eram impares`)
}else{

    resultado = (resultado / 5)
    alert(`${resultado}`)
}