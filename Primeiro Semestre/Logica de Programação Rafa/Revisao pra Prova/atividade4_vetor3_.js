let n
let numeros = []
let zero = 0, um = 0, dois = 0, tres = 0, quatro = 0, cinco = 0, seis = 0, sete = 0, oito = 0, nove = 0, dez = 0;
let contagens = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    contagens[n]++
}

console.table(contagens)
console.table(numeros)
//console.log(numeros)


alert(`Quantidade de zero: ${contagens[0]} \nQuantidade de um: ${contagens[1]} \nQuantidade de dois: ${contagens[2]} \nQuantidade de três: ${contagens[3]} \nQuantidade de quatro: ${contagens[4]} \nQuantidade de cinco: ${contagens[5]} \nQuantidade de seis: ${contagens[6]} \nQuantidade de sete: ${contagens[7]} \nQuantidade de oito: ${contagens[8]} \nQuantidade de nove: ${contagens[9]} \nQuantidade de dez: ${contagens[10]}`)