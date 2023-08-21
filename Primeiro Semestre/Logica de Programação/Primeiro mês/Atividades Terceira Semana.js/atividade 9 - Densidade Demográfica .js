/* Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (metros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25)*/

let densidadeDemografica, populacao, area;

populacao = Number(prompt(`Digite a população: `))
area = Number(prompt(`Digite a área²: `))

densidadeDemografica = ( populacao / area ).toFixed(2)

if(densidadeDemografica < 25){

    alert(`A densidade demográfica da sua área é baixa.`)

}else if(densidadeDemografica >= 100){

    alert(`A densidade demográfica da sua área é alta.`)

}else{

    alert(`A densidade demográfica da sua área é média.`)

}