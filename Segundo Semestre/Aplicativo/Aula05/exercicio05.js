/*
Fazer um programa para ler os valores da largura e altura de um retângulo. Em seguida,
mostrar na tela o valor de sua área, perímetro e diagonal. Usar uma classe como mostrado
no projeto ao lado.
*/
let area, perimetro, diagonal

let retangulo = {

    largura: 300,
    altura: 400
}

function MetodoArea(){

    area = retangulo.largura * retangulo.altura
    console.log(`Área: ${area}²`)
}


function MetodoPerimetro(){

    perimetro = 2*(retangulo.largura + retangulo.altura)
    console.log(`Perimetro: ${perimetro}cm`)
}

function MetodoDiagonal(){

    diagonal = Math.sqrt(retangulo.largura * retangulo.largura + retangulo.altura * retangulo.altura)
    console.log(`Diagonal: ${diagonal}`)
}

MetodoArea()
MetodoPerimetro()
MetodoDiagonal()