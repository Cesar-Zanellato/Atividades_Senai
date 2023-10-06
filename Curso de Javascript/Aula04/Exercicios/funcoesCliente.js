function limparFormulario() {
    document.getElementById("idCliente").value;
    
    var nome = document.getElementById("nome");
    nome.value = "";

    document.getElementById("cpf").value;
    document.getElementById("dataNascimento").value;
    document.getElementById("endereco").value;
    document.getElementById("telefone").value;
}

function mascararCpf(evento){
    var valorAtual = evento.target.value;
    console.log(valorAtual);
    
    if(evento.keyCode === 8){
        return;
    }
    
    if(valorAtual.length === 3 || valorAtual.length === 7){
        evento.target.value = valorAtual + ".";
    }
    if(valorAtual.length === 11){
        evento.target.value = valorAtual + "-";
    }
}

function mascararTelefone(evento){
    var valorAtual = evento.target.value;
    console.log(valorAtual);

    if(evento.keyCode === 8){
        return;
    }

    if(valorAtual.length === 0){
        evento.target.value = "(" + valorAtual;
    }
    if(valorAtual.length === 3){
        evento.target.value = valorAtual + ") ";
    }
    if(valorAtual.length === 10){
        evento.target.value = valorAtual + "-";
    }
}

function salvar(){
    var divMensagem = document.createElement("div");
    var mensagem = document.createTextNode("Cliente salvo com sucesso");

    divMensagem.appendChild(mensagem);
    document.body.insertAdjacentElement("afterbegin", divMensagem);
}

function salvarComMensagemEscondida() {
    document.getElementById("mensagem").style.display = "";
    document.getElementById("mensagemSucesso").style.display = "";
}