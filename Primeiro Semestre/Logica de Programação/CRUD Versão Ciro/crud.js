let vetorNome = []
let addNome, executar


    do{
        executar = Number(prompt('Escolha uma opção\n1- Cadastrar nome\n2- Excluir um nome\n3- Editar um nome\n4-  Pesquisar se um nome está cadastrado\n5- Listar todos os nomes cadastrados\n0- Sair do programa'))
        
        switch(executar){
        
        case 1:
            
            Cadastro()
            break
            
        case 2:
            Excluir()
            break

        case 3:
            Editar()
            break
        
        case 4:
        
            Verificar()  
            break
        
        case 5:
            Lista()
            break
    }
    
    }while(executar != 0)

    function Cadastro(){
        
        /*document.getElementById('baixo').innerHTML = addNome = document.getElementById('inp').value
        vetorNome.push(addNome)*/

        addNome = prompt('Cadastre um nome')
            vetorNome.push(addNome)
        }

    function Excluir(){

        addNome = prompt("Qual nome excluir? ")

                for(i=0; i < vetorNome.length; i++){
                
                    if(addNome == vetorNome[i]){
                    
                        vetorNome.splice(i,1)
                    
                    }
                
                }

    }

    function Editar(){
        
        let novoNome

        addNome = prompt("Escolha um nome para editar: ")
            novoNome = prompt("Digite o novo nome de usuário")

                for(i=0; i < vetorNome.length; i++){
                
                    if(addNome == vetorNome[i]){
                    
                        vetorNome.splice(i,1,novoNome)
                    
                    }
                
                }

    }

    function Verificar(){

        let cadastro

        addNome = prompt("Saiba se o nome esta cadastrado")
            cadastro = vetorNome.includes(addNome)

                if(cadastro == true){
                
                    alert('Usuário existe')
                
                }else{
                
                    alert('Usuário não existe')
                
                }
    }

    function Lista(){

        alert(`Todos os Nomes cadastrados são: ${vetorNome}`)

    }