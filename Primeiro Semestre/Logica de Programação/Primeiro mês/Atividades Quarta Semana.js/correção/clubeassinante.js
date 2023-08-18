/* Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.

*/

let valor, assinatura, desconto, frete = 12.5

    valor = Number(prompt("Valor da compra: "))

    assinatura = Number(prompt(">>> CATEGORIA ASSINATURA <<<\n\n1) Premium\n2) Gold\n3) Silver\n4) Sem assinatura\n"))

    switch(assinatura){

        case 1:

            desconto = (valor / 100) * 20
            valor = valor - desconto

            alert(`Total da compra: R$${valor}.`)
            break

        case 2:

            desconto = (valor / 100) * 20
            valor = (valor - desconto) + frete

            alert(`Total da compra: R$${valor}.`)
            break

        case 3:

            desconto = (valor / 100) * 10
            valor = valor - desconto + frete

            alert(`Total da compra: R$${valor}.`)
            break

        case 4:

            valor = valor + frete

            alert(`Total da compra: R$${valor}.`)
            break

        default:

            alert("NOUS!")
            
    }





