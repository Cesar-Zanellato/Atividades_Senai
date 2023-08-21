/*
Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço entre R$50 e R$100;
c) A média dos preços dos produtos com preço superior a R$100.
*/

let produtoMenor100 = []
let precoMenor50 = 0
let precoMaior100 = 0
let precoMaior = []
let addProdutos
let addPreco

for(i=0; i<5; i++){

    addProdutos = prompt(`Digite o produto: `)
    
    addPreco = Number(prompt(`Digite o seu preço: `))
    

    if(addPreco < 50){

        precoMenor50++

    }else if(addPreco <= 100){

        produtoMenor100.push(addProdutos)

    }else{

        precoMaior100 += addPreco
        precoMaior.push(addPreco)

    }
}
    console.log(precoMaior)
    precoMaior100 = (precoMaior100 / precoMaior.length).toFixed(2)

alert(`Quantidade de produtos com preço inferior a R$50: ${precoMenor50} \nNome dos produtos com preço entre R$50 e R$100: ${produtoMenor100} \nmédia dos preços dos produtos com preço superior a R$100: ${precoMaior100}.`)
