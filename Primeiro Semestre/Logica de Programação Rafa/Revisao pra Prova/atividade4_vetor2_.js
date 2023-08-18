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
    if(n == 0) zero++;
    if(n == 1) um++;
    if(n == 2) dois++;
    if(n == 3) tres++;
    if(n == 4) quatro++;
    if(n == 5) cinco++;
    if(n == 6) seis++;
    if(n == 7) sete++;
    if(n == 8) oito++;
    if(n == 9) nove++;
    if(n == 10) dez++;
}

alert(`Quantidade de zero: ${zero} \nQuantidade de um: ${um} \nQuantidade de dois: ${dois} \nQuantidade de três: ${tres} \nQuantidade de quatro: ${quatro} \nQuantidade de cinco: ${cinco} \nQuantidade de seis: ${seis} \nQuantidade de sete: ${sete} \nQuantidade de oito: ${oito} \nQuantidade de nove: ${nove} \nQuantidade de dez: ${dez}`)