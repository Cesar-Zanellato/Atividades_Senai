//Método concat()

let frutas = ['goiaba', 'uva', 'abacaxi']
let verduras = ['pepinos', 'pimenta', 'salsa']
let ortifrutis = []

ortifrutis = frutas.concat(verduras)

//ortifrutis = [...verduras, 'repolho']

alert(ortifrutis)






//Método indexOf() e lastIndexOf()

//             0  1  2  3  4  5  6   7   8
let numeros = [8, 2, 8, 2, 8, 7, 12, 8, 18]
let numerosPesquisa, indiceNumero1, indiceNumero2


    numerosPesquisa = Number(prompt("Qual o número quer saber? "))

    indiceNumero1 = numeros.indexOf(numerosPesquisa)
    indiceNumero2 = numeros.lastIndexOf(numerosPesquisa)

    alert(`Primeira posição encontrada: ${indiceNumero1} \nÚltima posição encontada: ${indiceNumero2}. `)






//             0  1  2  3  4  5  6   7   8
let vetorNumeros = [8, 2, 8, 2, 8, 7, 12, 8, 18]
let caixinha = []
let pesquisaNumero

numerosPesquisa = Number(prompt("Qual o número quer saber? "))

for(i=0; i<vetorNumeros.length; i++){

if(vetorNumeros[i] == pesquisaNumero){

    caixinha.push(i)
}
}
alert(`Posições encontradas: ${caixinha}.`)





//Método join()

let numerosInteiros = [1,2,3,4,5,6]
let lista 
                // ("")  ("-") ("/")
    lista = numerosInteiros.join(" ") + "<br>" 
    
    alert(lista)





//Método fill()
//                0       1       2       3       4
let animais = ['Gato', 'Gato', 'Gato', 'Gato', 'Gato']


animais.fill("Cachorro", 2, 4)

//ortifrutis = [...verduras, 'repolho']

alert(animais)





//Método includes()

let jogos = ['God of War', 'GTA', 'The Witcher']
let jogosEncontrado

jogosEncontrado = jogos.includes("GTA")

//true

alert(jogosEncontrado)





//Método slice()

let pokemons = ['Pikachu', 'charizard', 'Squietle', "Bulbasaur", "Meowtwo"]
let cortPokemons

cortPokemons = pokemons.slice(1,3)

alert(cortPokemons)




//Método splice()


    users = ["Rafael", "Vinicius", "Ermenegildo", "Ainoã"]

    users.splice(3, 1, "Ciro")

alert(users)


//Método sort

let vetorNumerosInteiros = [1, 3, 0, 4, 7, 8, 2, 9, 6, 5]

    vetorNumerosInteiros.sort()

//  vetorNumerosInteiros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
alert(vetorNumerosInteiros)





let vetorNumerosInteiro = [1, 30, 10, 4, 7, 8, 22, 9, 6, 5]
let nomes = ["Abigail", "Leoes Baios", "Ursula", "astrogildo"]

    vetorNumerosInteiro.sort(compararNumeros)
    nomes.sort()

//alert(vetorNumerosInteiro)
alert(nomes)


function compararNumeros(a, b) {

    return a - b

  }

