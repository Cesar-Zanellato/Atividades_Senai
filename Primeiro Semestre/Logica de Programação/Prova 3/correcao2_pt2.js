/*
O site Netflix, baseado em seu algoritmo que monitora as preferências dos usuários, lançou uma lista de possíveis séries que serão excluídas do seu catálogo. A lista contém 10 séries: Atlanta, Arcane, Dahmer, Dark, Lucifer, Lupin, Manifest, Narcos, Ozark e Seinfeld. Após lançar a lista, abriu uma enquete na qual os usuários poderiam excluir 3 séries dessa lista, que seriam as escolhas do usuário para sair do catálogo. Criar um programa que inicie com a lista das séries acima armazenadas (vetor) e pergunte ao usuário (uma por vez) quais as 3 séries quer excluir. A pergunta deve incluir a lista atualizada, para que o usuário possa visualizar as séries. Ao final mostrar a lista original com as 10 séries, a lista com as 7 séries que restaram e uma lista com as 3 séries excluídas.

Critérios de avaliação:

(0,5) Criar a lista com as 10 séries.
(0,5) Mostrar a lista atualizada nas perguntas.
(1,5) Excluir corretamente as séries escolhidas.
(1,5) Mostrar as três listas finais (original, séries restantes, séries excluídas).
*/

let listaOriginal = ["Atlanta", "Arcane", "Dahmer", "Dark", "Lucifer", "Lupin", "Manifest", "Narcos", "Ozark", "Seinfeld"]
let listaRestantes = []
let listaExcluidos = []
let serieExclui, posExclui

listaRestantes = [... listaOriginal]

for(i=0; i<3; i++){


    do{

        serieExclui = prompt(`Qual dessas series você deseja remover: ${listaRestantes}`)
    
        posExclui = listaRestantes.indexOf(serieExclui)
    
            if(posExclui == -1){
    
                alert("Serie não encontrada!")
    
            }else{
    
                listaRestantes.slice(posExclui, 1)
    
                listaExcluidos.push(serieExclui)
            }


    }while(posExclui == -1)
}

alert(`Lista Original: ${listaOriginal} \nLista Atualizada: ${lista} \nItens removidos: ${removidos}.`)