let nome = document.getElementById("inputNome")
let senha = document.getElementById("inputSenha")
let confSenha = document.getElementById("inputConfSenha")

let vetorUsers = []

function CadastraUser(){


let usuario = {

    username: "",
    password: "",
    confPassword: ""

}


    usuario.username = nome.value
    usuario.password = senha.value
    usuario.confPassword = confSenha.value

    vetorUsers = JSON.parse(localStorage.getItem("usuarioSalvo"))

    if(vetorUsers == null){

        vetorUsers = []
    }

        vetorUsers.push(usuario)
        localStorage.setItem("usuarioSalvo", JSON.stringify(vetorUsers))

    LimpaInputs()

}


function PesquisaUser(){
    
    for(i=0; i < vetorUsers.length; i++){
        
        if(nome.value == vetorUsers[i].username){
            
            nome.value = vetorUsers[i].username
            senha.value = vetorUsers[i].password
            confSenha.value = vetorUsers[i].confPassword
            
        }
    }
}


function LimpaInputs(){
    
    
    nome.value = ""
    senha.value = ""
    confSenha.value = ""
}