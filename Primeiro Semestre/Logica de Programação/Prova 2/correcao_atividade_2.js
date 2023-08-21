/*>>>>>>>>>>>>>>>>>> Atividade 2 (3,0) <<<<<<<<<<<<<<<<<<<<

No site Netshoes, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque, como na página principal, na página da categoria daquele produto, na página de promoções ou se não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional switch / case, que receba essas avaliações do comprador (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice entre 5 a 7 (destaque na página da categoria), índice entre 7 a 9 (destaque em promoções), índice acima de 9 (destaque na página principal).

(1,0) Receber as notas da avaliação.
(1,0) Calcular o índice do produto (média).
(1,0) Criar o sistema de destaques com as quatro possibilidades.

*/

let qualidade, custoBeneficio, durabilidade, indice;

qualidade = Number(prompt("Digite o nivel(0 a 10) da sua satisfação com a qualidade do produto: "))
custoBeneficio = Number(prompt("Digite o nivel(0 a 10) da sua satisfação com o custoBeneficio do produto: "))
durabilidade = Number(prompt("Digite o nivel(0 a 10) da sua satisfação com a durabilidade do produto: "))

indice = ((qualidade + custoBeneficio + durabilidade) / 3).toFixed(2)

    switch(true){

        case indice < 5:
        alert(`O produto teve um índice de satisfação de ${indice} e não será ganha destaque`)
        break

        case indice >= 5 && indice <= 7:
        alert(`O produto teve um índice de satisfação de ${indice} e será destaque na página da categoria`)
        break

        case indice > 7 && indice <= 9:
        alert(`O produto teve um índice de satisfação de ${indice} e será destaque em promoções`)
        break

        case indice == 10:
        alert(`O produto teve um índice de satisfação de ${indice} e será destaque na página principal`)
        
    }