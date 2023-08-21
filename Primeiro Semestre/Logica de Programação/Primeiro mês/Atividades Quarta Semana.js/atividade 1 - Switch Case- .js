/* Fazer um porgrama onde o usuario pode assesar as seguintes opções:
A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente      D) Sair                
Mostrar mensagens para cada opção!
(DESAFIO: Fazer voltar para o menu caso A, B, C)                 */

let dados;
cesar()
function cesar(){

dados = prompt(`Digite A para falar com a atendente.\nDigite B para falar com a RH.\nDigite C falar com o gerente.\nDigite D para sair.`).toUpperCase()

    switch(dados){

        case "A":
        alert(`Você esta sendo redirecionado para um atendente!`)
        cesar()       
        break
        

        case "B":
        alert(`Você esta sendo redirecionado para o RH!`)
        cesar()
        break
      

        case "C":
        alert(`Você esta sendo redirecionado para o gerente!`)
        cesar()
        break
        

        case "D":
        alert(`Você esta sendo redirecionado para fora do site!`)
        break
    }
}