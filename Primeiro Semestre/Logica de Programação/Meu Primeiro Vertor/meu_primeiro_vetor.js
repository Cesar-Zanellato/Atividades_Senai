//             0  1  2   3  4
let numeros = [2, 5, 7, 10, 8,]
//              0          1            2
let nomes = ["Ligia","Ermenegildo", "Abigail"]
//
let idades = []
//
let cores = []
let addCores
let addIdades, somaIdades = 0

//alert(`Soma: ${numeros[0] + numeros[7]}.`)

//alert(numeros.length)

//alert(numeros[(numeros.length / 2) - 0.5])

//alert(nomes[0] + "feat" + nomes[2])

//alert(numeros)

    for(i=0; i < 5; i++){

        addIdades = prompt("Digite uma idade: ")
        idades.push(addIdades)

}
    for(i=0; i < idades.length; i++){

        somaIdades += idades[i]

    }