let placa = document.getElementById("inpPlaca")
let ano = document.getElementById("inpAno")
let modelo = document.getElementById("inpModelo")
let marca = document.getElementById("inpMarca")
let cor = document.getElementById("inpCor")

let estacionamento = []

placa.focus()

LerLocalStorage()

function Cadastrar(){
    
    let carro = {
        
        placa: "",
        ano: "",
        modelo: "",
        marca: "",
        cor: "",
    }
    
    carro.placa = ano.value
    carro.ano = ano.value
    carro.modelo = modelo.value
    carro.marca = marca.value
    carro.cor = cor.value
    
    LerLocalStorage()
    
    estacionamento.push(carro)
    localStorage.setItem("estacionamentoSalvo", JSON.stringify(estacionamento))
    

    LimpaInputs()
}

function Pesquisar(){
    
    for(i=0; i < estacionamento.length; i++){
        
        if(placa.value == estacionamento[i].placa){
            
            ano.value = estacionamento[i].ano
            modelo.value = estacionamento[i].modelo
            marca.value = estacionamento[i].marca
            cor.value = estacionamento[i].cor
        }
    }
}

function Editar(){
    
    for(i=0; i < estacionamento.length; i++){
        
        if(placa.value == estacionamento[i].placa){
            
            estacionamento[i].ano = ano.value
            estacionamento[i].modelo = modelo.value
            estacionamento[i].marca = marca.value
            estacionamento[i].cor = cor.value
        }
    }

    localStorage.setItem("estacionamentoSalvo", JSON.stringify(estacionamento))
}



function LerLocalStorage(){

    estacionamento = JSON.parse(localStorage.getItem("estacionamentoSalvo"))
    
    if(estacionamento == null){
        
        estacionamento = []
    }
}

function LimpaInputs(){
    
    placa.value = ""
    ano.value = ""
    modelo.value = ""
    marca.value = ""
    cor.value = ""
    placa.focus()
}

