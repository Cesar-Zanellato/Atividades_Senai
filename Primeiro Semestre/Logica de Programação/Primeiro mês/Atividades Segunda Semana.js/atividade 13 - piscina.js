/*Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50. (JS)*/

/*metro quadrado, são necessários 120 azulejos*/
/* multiplicando a largura pelo comprimento.*/
/*Digitar os valores (em metros) da largura e comprimento*/
/*Mostrar na tela a quantidade de azulejos*/
/*caixa de azulejo com 60 unidades custa R$45,50*/

let azulejo, comprimento, largura, valor, metroQuadrado;
let preco = 45.5

comprimento = Number(prompt(`Digite a comprimento da piscina: `))
largura = Number(prompt(`Digite a largura da piscina: `))

metroQuadrado = (largura * comprimento).toFixed(2)
azulejo = metroQuadrado * 120
valor = ((preco / 60) * azulejo).toFixed(2)

alert(`Quantidade de azulejos: ${azulejo}\nValor dos azulejos: R$${valor}.`)