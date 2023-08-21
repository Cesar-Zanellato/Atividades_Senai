/*Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".
*/

let num

for(i=10; i > 0; i--){

num = Number(prompt("Digite o número da sequência: "))

    if (num != i){

        alert("Errou a sequência");
        break
    }
}
    if(i == 0){

        alert("Você terminou a sequência corretamente")
    }    