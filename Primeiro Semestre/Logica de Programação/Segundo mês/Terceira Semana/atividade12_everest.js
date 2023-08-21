/*
O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.
*/

let acampamento = 5360, everest = 8848, dias = 0, alturaDia, resto = 0

resto = everest - acampamento

for(i=0; i<8; i++){

    alturaDia = Number(prompt(`Digite quantos metros você andou hoje.`))
    resto = resto - alturaDia
    dias++

    if(resto <= 0){

        alert(`Parabéns você atingiu o topo em ${dias} dias.`)
        break
    }
}

if(resto > 0){

alert(`Você deve voltar, pois corre risco de ficar sem oxigênio.`)
}