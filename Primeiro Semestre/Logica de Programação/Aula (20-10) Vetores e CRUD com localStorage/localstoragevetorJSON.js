let users = []
let addUser

    users = JSON.parse(localStorage.getItem('vetorUsers'))
    alert(users)

    if(users == null){

        users = []

        RealizaCadastro()

    }else{
      
        RealizaCadastro()

    }


    function RealizaCadastro(){

        addUser = prompt("Digite um usuário: ")
        users.push(addUser)
        localStorage.setItem('vetorUsers', JSON.stringify(users))
        alert("Cadastro Realizado!")

    }





    

