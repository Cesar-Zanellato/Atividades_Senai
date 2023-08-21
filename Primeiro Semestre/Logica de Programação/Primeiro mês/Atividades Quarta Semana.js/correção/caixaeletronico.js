/* Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial. */

let op, conta, deposito, saque, saldo = 1000

    conta = prompt("Qual a sua conta?") 

Menu()

function Menu(){

    op = Number(prompt(">>> ESCOLHA A OPERAÇÃO <<<\n\n1) Saldo\n2) Depósito\n3) Saque\n4) Sair\n"))

    switch(op){

        case 1:

            alert(`Saldo atual: R$${saldo}.`)
            Menu()
            break
        
        case 2:

            deposito = Number(prompt("Valor do depósito? "))
            saldo = saldo + deposito
            alert(`Saldo atual: R$${saldo}.`)
            Menu()
            break

        case 3:

            saque = Number(prompt("Valor do saque? "))

                if(saque <= saldo){

                    saldo = saldo - saque
                    alert(`Saldo atual: R$${saldo}.`)

                }else{

                    alert(`Você tá quebrado meu fio... Saldo atual: R$${saldo}.`)

                }

            Menu()
            break

        case 4:

            alert("Falousss!")
            break

        default:

            alert("Digita direito aí rapaz!")
            Menu()
            break    

    }

}