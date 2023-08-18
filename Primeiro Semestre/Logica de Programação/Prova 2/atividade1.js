/*>>>>>>>>>>>>>>>>>>> Atividade 1 (3,0) <<<<<<<<<<<<<<<<<<<

Criar um sistema que receba os dados do usuário como pessoa (nome, nacionalidade, sexo e idade) para sinalizar se ele pode se cadastrar no sistema do governo brasileiro. Ao final mostrar mensagens para o usuário, indicando se ele pode se cadastrar ou não. Os seguintes critérios são adotados para o aceite de cadastro:

(1,0) O usuário deve ser brasileiro, do sexo masculino e ter entre 18 e 70 anos.
(1,0) O usuário deve ser brasileiro, do sexo feminino e ter entre 18 e 60 anos.
(1,0) O usuário, caso não seja brasileiro, deve morar no Brasil a mais de 5 anos e ter entre 21 e 35 anos.
*/

let nome, nacionalidade, sexo, idade, tempoMoradia;

nome = prompt(`Digite o seu nome: `)

nacionalidade = prompt(`Digite a nascionalidade: `).toLowerCase()

    if(nacionalidade != "brasileiro" && nacionalidade != "brasileira"){
        tempoMoradia = Number(prompt(`Digite há quanto tempo você mora no Brasil: `))
    }else{}
    
sexo = prompt(`Digite o sexo(M/F): `).toLowerCase()

idade = Number(prompt(`Digite a sua idade: `))

   

    if(sexo == "masculino" && idade >= 18 && idade <= 70){
       
        alert(`Sr(a) ${nome}, você pode se cadastrar!`)

    }
    else if(sexo == "feminino" && idade >= 18 && idade <= 60){

        alert(`Sr(a) ${nome}, você pode se cadastrar!`)

    }
    else if(nacionalidade != brasileiro || nacionalidade != brasileira && tempoMoradia > 5 && idade >= 21 && idade <= 35){

        alert(`Sr(a) ${nome}, você pode se cadastrar!`)

    }else{

        alert(`Sr(a) ${nome}, você não pode se cadastrar!`)
    }