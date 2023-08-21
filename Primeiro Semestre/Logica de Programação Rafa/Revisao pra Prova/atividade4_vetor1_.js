let n
let numeros = []
let zero = 0, um = 0, dois = 0, tres = 0, quatro = 0, cinco = 0, seis = 0, sete = 0, oito = 0, nove = 0, dez = 0;

Math.floor(0.1) // 0
Math.ceil(0.1) // 1
Math.round(0.1) // 0
Math.round(0.5) // 1

for(let i=0; i < 100; i++){

    //n = Math.random()
    n = Math.random() * 10
    n = Math.round(n)
    numeros.push(n)
    contaNumeros()
}

console.table(numeros)
//console.log(numeros)

function contaNumeros(){

    switch(numeros){
    
        case 0 : zero++
        break;
    
        case 1 : um++
        break;

        case 2 : dois++
        break;

        case 3 : tres++
        break;

        case 4 : quatro++
        break;

        case 5 : cinco++
        break;

        case 6 : seis++
        break;

        case 7 : sete++
        break;

        case 8 : oito++
        break;

        case 9 : nove++
        break;

        case 10 : dez++
        break;
    }
}

alert(`Quantidade de zero: ${zero} \nQuantidade de um: ${um} \nQuantidade de dois: ${dois} \nQuantidade de três: ${tres} \nQuantidade de quatro: ${quatro} \nQuantidade de cinco: ${cinco} \nQuantidade de seis: ${seis} \nQuantidade de sete: ${sete} \nQuantidade de oito: ${oito} \nQuantidade de nove: ${nove} \nQuantidade de dez: ${dez}`)