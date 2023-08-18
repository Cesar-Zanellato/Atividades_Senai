/* CRUD HTML */

let nomeAdd = document.getElementById("inputCadastra") 
let nomeExclui = document.getElementById("inputExclui")
let nomeEdita = document.getElementById("inputEdita")
let nomePesquisa = document.getElementById("inputPesquisa")
let nomes = []

function Cadastrar(){

    nomes.push(nomeAdd.value)
    console.log(nomes)
    nomeAdd.value = ''
    alert("Cadastro realizado! :D")

}

function Excluir(){

    posNome = nomes.indexOf(nomeExclui.value)

        if(posNome == -1){

            nomeExclui.value = ''
            alert("Nome não cadastrado! :(")
            
        }else{

            nomes.splice(posNome, 1)
            nomeExclui.value = ''
            console.log(nomes)
            alert("Nome excluído! ;)")

        }

}

function Editar(){


    nomes[posNome] = nomeEdita.value
    nomeEdita.value = ''
    alert("Nome editado! :D")
    console.log(nomes)

    posNome = -1

}

function Pesquisar(){

    posNome = nomes.indexOf(nomePesquisa.value)

    console.log(posNome)

        if(posNome == -1){

            nomePesquisa.value = ''
            alert("Nome não encontrado! :(")
            
        }else{

            nomeEdita.value = nomePesquisa.value
            nomePesquisa.value = ''
            alert("Nome encontrado! :D")

        }

}

function Listar(){

    document.getElementById("baixo").innerHTML = nomes

}
