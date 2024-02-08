/**
 * Array com Pessoas
 */
const pessoas = [
    { nome: "Maria", idade: 30, profissao: "Engenheira" },
    { nome: "João", idade: 25, profissao: "Designer" },
    { nome: "Ciro", idade: 21, profissao: "Garoto de Programa" },
    { nome: "Luigi", idade: 20, profissao: "Cara da TI" },
    { nome: "Ana", idade: 35, profissao: "Professor" }
];


/**
 * pegando o elemento do HTML
 */
root = document.getElementById("root");


/**
 * Calculando a Soma das idade das pessoas do array 
 */
const idadeTotal = pessoas.reduce(function(somatoria, pessoa){
    return somatoria + pessoa.idade;
},0);
console.log(idadeTotal);


/**
 * Mostrando na tela os elementos do array no html com "for"
 */
// for(i=0; i < pessoas.length; i++){
//     let p = document.createElement("p");
//     p.textContent = `Nome: ${pessoas[i].nome} - Idade: ${pessoas[i].idade} - Profissão: ${pessoas[i].profissao}`;
//     p.setAttribute("class", "pPessoa");
//     p.setAttribute("id", `pessoa${i}`);
//     root.appendChild(p);
// }


/**
 * Filtrando as "pessoas" com 30 anos ou mais
 */
let idadeAvancada = pessoas.filter(function(pessoa){
    return pessoa.idade >= 30;

});
console.log(idadeAvancada);


/**
 * Mostrando na tela os elementos do array com o "forEach"
 */
pessoas.forEach(function(pessoa){
    console.log(pessoa.nome);
    let p = document.createElement("p");
    p.textContent = `Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Profissão: ${pessoa.profissao}`;

    p.setAttribute("class", "pPessoa");
    p.setAttribute("id", `pessoa${pessoas.indexOf(pessoa)}`);

    root.appendChild(p);
});