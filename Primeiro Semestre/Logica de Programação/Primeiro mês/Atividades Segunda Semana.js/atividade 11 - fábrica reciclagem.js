/*Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. (JS)*/

let plastico, papel, metal, resultadoPlastico, resultadoPapel, resultadoMetal, resultadoTotal;
let valorPlastico = 2, valorPapel = 3, valorMetal = 5;

alert(`Essa fábrica de reciclagem trabalha em Kg.`)

plastico = Number(prompt(`Digite a quantidade de plastico em Kg: `))
papel = Number(prompt(`Digite a quantidade de papel em Kg: `))
metal = Number(prompt(`Digite a quantidade de metal em Kg: `))

resultadoPlastico = ((plastico * valorPlastico ) / 10)
resultadoPapel = ((papel * valorPapel) / 30)
resultadoMetal = ((metal * valorMetal) / 50)
resultadoTotal = (resultadoMetal + resultadoPapel + resultadoPlastico).toFixed(2)

alert(`Resultado total R$${resultadoTotal}.`)