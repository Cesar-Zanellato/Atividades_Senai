/*
4. Em uma pesquisa um cinema solicitou os seguintes dados para os entrevistados:
sexo (0 para masculino e 1 para feminino) e a quantidade de filmes que assistiu no
primeiro semestre de 2022. Faça um algoritmo para registar os dados das variáveis
das 50 pessoas e informe:
a) a quantidade de mulheres entrevistadas.
b) a quantidade de pessoas que assistiram mais que 10 filmes.
c) o percentual de mulheres entrevistadas.
Obs: Não precisa armazenar os valores em array
var sexo = Math.floor(Math.random() * 2) //sortear número entre 0 e 1
var b = Math.floor(Math.random() * 75 + 18) //sortear idade
Exemplo de saída:
Questão 4
Quantidade de mulheres: 25
Quantidade de pessoas assistiram mais que 10 filmes: 45
Percentual de mulheres: 50%
*/

let mulheres = 0
let percentualMulheres = 0
let maisDez = Math.floor(Math.random() * 50 + 10)
let sexo


for(i=0; i<50; i++){

    sexo = Math.floor(Math.random() * 2)
    
    if(sexo == 1){

        mulheres++
    }

}

percentualMulheres = (100 * mulheres) / 50

console.log(`Questão 4 \nQuantidade de mulheres: ${mulheres} \nQuantidade de pessoas assistiram mais que 10 filmes: ${maisDez} \nPercentual de mulheres: ${percentualMulheres}%`)