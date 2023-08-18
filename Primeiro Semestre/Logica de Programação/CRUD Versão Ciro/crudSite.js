let vetorNome = []
let addNome = document.getElementById("inpCadastro")
let excluirNome = document.getElementById("inpExcluir")
let editarNome = document.getElementById("inpEditar")
let verificarNome = document.getElementById("inpVerificar")


    function Cadastro(){

            vetorNome.push(addNome.value)
            alert("Cadastrado")
            addNome.value = ''
        }

    function Excluir(){

                for(i=0; i < vetorNome.length; i++){
                
                    if(excluirNome.value == vetorNome[i]){
                    
                        vetorNome.splice(i,1)
                    
                    }
                
                }
                excluirNome.value = ''
    }

    function Editar(){
        
        let novoNome = document.getElementById("inpEditar")

                for(i=0; i < vetorNome.length; i++){
                
                    if(addNome.value == vetorNome[i]){
                    
                        vetorNome.splice(i,1,novoNome.value)
                    
                    }
                
                }
                editarNome.value = ''
                addNome.value = ''

    }

    function Verificar(){
        let provaReal
        provaReal = vetorNome.includes(verificarNome.value)

        if(provaReal == true){
            verificarNome.value = ''
            alert('Usuário existe')
        
        }else{
            verificarNome.value = ''
            alert('Usuário não existe')
        
        }
}
    

    function Lista(){

        alert(`Todos os Nomes cadastrados são: ${vetorNome}`)

    }