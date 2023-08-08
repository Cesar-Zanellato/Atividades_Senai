/*
2. A empresa ABC resolveu conceder um aumento de salários a seus funcionários
de acordo com a tabela abaixo:
Salário Percentual de Reajuste

            0 – 2000.00         15%
            2000.01 – 4000.00   12%
            Acima de 4000       10%

Informe o valor de 3000,00 como o salário do funcionário e calcule e mostre o
novo salário, bem como o valor de reajuste ganho e o índice reajustado,
em percentual.
Exemplo de saída:
Questão 2
Novo Salário: R$ 115.00
Valor Reajustado: R$ 15.00
Índice Reajustado: 15%
*/

let salario = 3000
let novoSalario
let valorReajustado
let indiceReajuste


if(salario <= 2000 ){

    valorReajustado = (salario / 100) * 15
    novoSalario = valorReajustado + salario
    indiceReajuste = 15
    console.log(`Questão 2 \nNovo Salário: R$ ${novoSalario}.00 \nValor Reajustado: R$ ${valorReajustado}.00 \nÍndice Reajustado: ${indiceReajuste}%`)

}else if(salario > 4000){

    valorReajustado = (salario / 100) * 10
    novoSalario = valorReajustado + salario
    indiceReajuste = 10
    console.log(`Questão 2 \nNovo Salário: R$ ${novoSalario}.00 \nValor Reajustado: R$ ${valorReajustado}.00 \nÍndice Reajustado: ${indiceReajuste}%`)

}else{

    valorReajustado = (salario / 100) * 12
    novoSalario = valorReajustado + salario
    indiceReajuste = 12
    console.log(`Questão 2 \nNovo Salário: R$ ${novoSalario}.00 \nValor Reajustado: R$ ${valorReajustado}.00 \nÍndice Reajustado: ${indiceReajuste}%`)
}