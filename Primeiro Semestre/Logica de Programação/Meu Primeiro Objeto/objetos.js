/*// Objetos sendo criado com valores

let livro = {
                titulo: "Jurassic Park", 
                autor: "Michael Chricton",
                editora: "Rocco",
                paginas: 489
}


livro.copias = 5

livro.paginas = ""

livro.titulo = "Mundo Perdido"

//alert(Object.entries(livro))
//alert(Object.values(livro))
//alert(Object.keys(livro))

//alert(`${Object.entries(livro)} \n${Object.keys(livro)} \n${Object.values(livro)}`)

//alert(livro.titulo)




// Objeto recebendo dados

let carro = {

    nome: "",
    marca: "",
    ano: ""

}


    carro.nome = prompt("Digite o nome do carro:")
    carro.marca = prompt("Digite a marca do carro:")
    carro.ano = Numbe(prompt("Digite o ano do carro:"))


alert(Object.values(carro))

*/

// Objeto recebendo valores de input

let nome = document.getElementById("inputNome")
let senha = document.getElementById("inputSenha")
let usuario = {

    userName: "",
    password: ""

}


function CadastraUser(){

    usuario.userName = nome.value
    usuario.password = senha.value


    alert(Object.values(usuario))
}

