let users = []
let addUsers



users = JSON.parse(localStorage.getItem('vetorUsers'))
alert(users)


    if(users == null){

        users = []

        RealizaCadastro()
    }else{

        RealizaCadastro()
    }

    
function RealizaCadastro(){

    addUsers = prompt("Digite um usuario: ")
    users.push(addUsers)
    localStorage.setItem('vetorUsers', JSON.stringify(users))
    alert("Cadastro Realizado!")
}