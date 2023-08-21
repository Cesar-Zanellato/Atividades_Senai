/*
 Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).
 */
let base, expoente, num = 1

base = Number(prompt("Digite um número base!"))
expoente = Number(prompt("Digite um número para ser o expoente!"))


    if(expoente == 0){

        num++
    }else{

    for(i=0; i < expoente; i++){

        num = (num * base) 

    }
}

alert(`${num}`)