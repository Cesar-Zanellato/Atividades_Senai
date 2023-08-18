/*Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa. (JS)*/

let mediaPessoa, choppDesperdicado, choppSobrou;
let choppTotal = 300, pessoas = 45;

alert(`45 pessoas foram convidadas para beber, e foram comprados 300 litros de chopp.`)

choppDesperdicado = Number(prompt(`Quantos litros de chopp foram desperdiçados: `))
choppSobrou = Number(prompt(`Quantos litros de chopp sobraram: `))

mediaPessoa = ((choppTotal - (choppDesperdicado + choppSobrou)) / pessoas).toFixed(2)


alert(`media de litros bebidos por pessoa é ${mediaPessoa}L.`)