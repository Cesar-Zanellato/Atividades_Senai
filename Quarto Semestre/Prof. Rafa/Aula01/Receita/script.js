
receitas = [
    {
    nome: "Bolo de Chocolate",
    modoDePreparo: "1. Misture todos os ingredientes secos. 2. Adicione os líquidos. 3. Asse por 40 minutos.",
    ingredientes: [
        { nome: "Chocolate em Pó", quantidade: 200, unidade: "g" },
        { nome: "Farinha de Trigo", quantidade: 250, unidade: "g" },
        { nome: "Açúcar", quantidade: 200, unidade: "g" }
    ],
    },
    {
    nome: "Risoto de Funghi",
    modoDePreparo: "1. Hidrate o funghi. 2. Refogue o arroz com o funghi. 3. Adicione o caldo aos poucos até o arroz ficar al dente.",
    ingredientes: [
        { nome: "Arroz Arbóreo", quantidade: 300, unidade: "g" },
        { nome: "Funghi Seco", quantidade: 100, unidade: "g" },
        { nome: "Caldo de Legumes", quantidade: 500, unidade: "ml" }
    ],
    },
    {
    nome: "Salada de Frutas",
    modoDePreparo: "1. Corte as frutas em pedaços. 2. Misture tudo em uma tigela. 3. Sirva gelado.",
    ingredientes: [
        { nome: "Banana", quantidade: 2, unidade: "un" },
        { nome: "Maçã", quantidade: 2, unidade: "un" },
        { nome: "Laranja", quantidade: 2, unidade: "un" }
    ],
    }
];

adicionarIngrediente()

function adicionarIngrediente(){
    const ingredientes = document.getElementById("ingredientes");
    const divNovoIngrediente = document.createElement("div");

    const labelIngrediente = document.createElement("label");
    const inputIngrediente = document.createElement("input");
    const labelQuantidade = document.createElement("label");
    const inputQuantidade = document.createElement("input");
    
    labelIngrediente.textContent = "Nome do Ingrediente: "
    inputIngrediente.placeholder = "Nome...";
    labelQuantidade.textContent = "Quantidade do Ingrediente: "
    inputQuantidade.placeholder = "Quantidade...";

    inputIngrediente.id = `inputIngrediente${receitas.length + 1}`;
    inputQuantidade.id = `inputQuantidade${receitas.length + 1}`;

    ingredientes.appendChild(divNovoIngrediente);
    divNovoIngrediente.appendChild(labelIngrediente);
    divNovoIngrediente.appendChild(inputIngrediente);
    divNovoIngrediente.appendChild(labelQuantidade);
    divNovoIngrediente.appendChild(inputQuantidade);
}

function concluirCadastro(){
    let receita = {
        id: `${receitas + 1}`,
        nome: document.getElementById("inputNome").value,
        modoPreparo: document.getElementById("modoPreparo").value,
        ingredientes: [],
    }
    for(let i = 0; i <= receitas.length; i++){
        receita.ingredientes.push({
                nome: document.getElementById(`inputIngrediente${i}`).value,
                quantidade: document.getElementById(`inputQuantidade${i}`).value,
            })
        
    }
    receitas.push(receita);
    
}

function mostrarCadastro(){
    document.getElementById("corpoPaginaCadastro").style.display = "block";
    document.getElementById("corpoPaginaPesquisa").style.display = "none";
}

function mostrarPesquisa(){
    document.getElementById("corpoPaginaCadastro").style.display= "none";
    document.getElementById("corpoPaginaPesquisa").style.display = "block";
}