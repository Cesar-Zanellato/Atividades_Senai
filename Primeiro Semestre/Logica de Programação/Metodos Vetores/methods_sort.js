//Método sort

let vetorNumerosInteiros = [1, 3, 0, 4, 7, 8, 2, 9, 6, 5]

    vetorNumerosInteiros.sort()

//  vetorNumerosInteiros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
alert(vetorNumerosInteiros)





let vetorNumerosInteiro = [1, 30, 10, 4, 7, 8, 22, 9, 6, 5]

    vetorNumerosInteiro.sort(compararNumeros)


alert(vetorNumerosInteiro)



function compararNumeros(a, b) {

    return a - b

  }
