

receita = {
    nome: "",
    ingredientes: [],
    modoPreparo: ""
};

let pagina = document.getElementById("corpoReceitas");

receita();

function receita(){
    let receita = document.createElement("div");
    let lbNome = document.createElement("label");
    let iptNome = document.createElement("input");
    let lbModoPreparo = document.createElement("label");
    let iptModoPreparo = document.createElement("input");
    let txtIngredientes = document.createElement("textarea");
    
    // lbNome.textContent = "Nome da Receita: ";
    // iptNome.textContent = "";
    // lbModoPreparo.textContent = "Modo de Preparo: ";
    // iptModoPreparo.textContent = "";
    txtIngredientes.textContent = "";
    
    pagina.appendChild(receita);
    receita.appendChild(lbNome);
    receita.appendChild(iptNome);
    receita.appendChild(lbModoPreparo);
    receita.appendChild(iptModoPreparo);
    receita.appendChild(txtIngredientes);
}

function mostrarCadastro(){
    document.getElementById("corpoPaginaCadastro").style.display = "block";
    document.getElementById("corpoPaginaPesquisa").style.display = "none";
}

function mostrarPesquisa(){
    document.getElementById("corpoPaginaCadastro").style.display= "none";
    document.getElementById("corpoPaginaPesquisa").style.display = "block";
}