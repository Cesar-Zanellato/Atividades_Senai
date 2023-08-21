/*Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se está abaixo ou acima do piso salarial mensal.*/

let salarioAnual, pisoSalarial, salarioMensal;

salarioAnual = Number(prompt(`Digite o seu salário anual: `))
pisoSalarial = Number(prompt(`Digite o piso salarial da sua profissão: `))


salarioMensal = (salarioAnual / 12).toFixed(2)


    if(salarioMensal >= pisoSalarial){

        alert(`Seu salario de R$${salarioMensal}, está acima do piso da sua Profissão.`)

    }else if(salarioMensal == pisoSalarial){

        alert(`Seu salario de R$${salarioMensal}, está de acordo com o piso da sua Profissão.`)

    }else{

        alert(`Seu salario de R$${salarioMensal}, está abaixo do piso da sua Profissão.`)

    }