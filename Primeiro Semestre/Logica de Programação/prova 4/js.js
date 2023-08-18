let variavelNome = document.getElementById("ipNome")
let variavelMarca = document.getElementById("ipMarca")
let variavelValor = document.getElementById("ipValor")

let loja = []



function cadastraProdutos(){


    let produto = {
    
        nome: "",
        marca: "",
        valor: "",

    
    }
    
        produto.nome = variavelNome.value
        produto.marca = variavelMarca.value
        produto.valor = variavelValor.value
    
        loja = JSON.parse(localStorage.getItem("produtosLoja"))
    
        if(loja == null){
    
            loja = []
        }
    
            loja.push(produto)
            localStorage.setItem("produtosLoja", JSON.stringify(loja))
    
        limpaInputs()
        
    
    }


function pesquisaProdutos(){
    
    for(i=0; i < loja.length; i++){
        
        if(variavelNome.value == loja[i].nome){
            
            variavelNome.value = loja[i].nome
            variavelMarca.value = loja[i].marca
            variavelValor.value = loja[i].valor
            
        }
    }
}

function listarProdutos(){

    let lista = ""
    loja = JSON.parse(localStorage.getItem("produtosLoja"))

    
    if(loja == null){
        
        lista = 'Não existem usuários cadastrados!'
        
    }else{
        
        for(i=0; i < loja.length; i++){
    
            lista = lista + Object.values(loja[i]).join(" - ") + "<br>"
    
        }
    }
    
    document.getElementById("Lista").innerHTML = lista
}



function limpaInputs(){
    
    
    variavelNome.value = ""
    variavelMarca.value = ""
    variavelValor.value = ""
}


function excluir(){

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