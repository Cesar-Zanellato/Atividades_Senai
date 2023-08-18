//Método indexOf() e lastIndexOf()

//             0  1  2  3  4  5  6   7   8
let numeros = [8, 2, 8, 2, 8, 7, 12, 8, 18]
let numerosPesquisa, indiceNumero1, indiceNumero2


    numerosPesquisa = Number(prompt("Qual o número quer saber? "))

    indiceNumero1 = numeros.indexOf(numerosPesquisa)
    indiceNumero2 = numeros.lastIndexOf(numerosPesquisa)

    alert(`Primeira posição encontrada: ${indiceNumero1} \nÚltima posição encontada: ${indiceNumero2}. `)




