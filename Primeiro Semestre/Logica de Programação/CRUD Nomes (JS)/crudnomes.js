/* Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 6) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========

1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar os nomes cadastrados
6- Sair do programa */

let op, addNome, nomeExclui, nomeEdita, novoNome, nomePesquisa, posNome
let nomes = []

        do{

            op = Number(prompt("======== MENU ========\n\n1- Cadastrar nome\n2- Excluir um nome\n3- Editar um nome\n4- Pesquisar se um nome está cadastrado\n5- Listar nomes cadastrados\n6- Sair do programa\n"))

            switch(op){

                case 1:

                    Cadastrar()
                    break

                case 2:

                    Excluir()
                    break

                case 3:

                    Editar()
                    break

                case 4:

                    Pesquisar()
                    break

                case 5:

                    Listar()
                    break

                case 6:

                    alert("Você escolheu sair do programa, tchau meu filho(a)!")
                    break

                case 0:

                    alert("Digite algo aí, meu filho(a)!")
                    break

                default:

                    alert("Digite uma opção válida!")

            }

        }while(op != 6)


function Cadastrar(){

    addNome = prompt("Digite o nome a ser cadastrado: ")
    nomes.push(addNome)

    alert("Cadastro realizado! :D")

}

function Excluir(){

    nomeExclui = prompt("Qual nome deseja excluir: ")
    posNome = nomes.indexOf(nomeExclui)

        if(posNome == -1){

            alert("Nome não cadastrado! :(")
            
        }else{

            nomes.splice(posNome, 1)
            alert("Nome excluído! ;)")

        }

}

function Editar(){

    nomeEdita = prompt("Qual nome deseja editar: ")
    posNome = nomes.indexOf(nomeEdita)

        if(posNome == -1){

            alert("Nome não cadastrado! :(")
            
        }else{

            novoNome = prompt("Qual novo nome: ")
            nomes[posNome] = novoNome
            alert("Nome editado! :D")

        }

}

function Pesquisar(){

    nomePesquisa = prompt("Qual nome deseja pesquisar: ")
    posNome = nomes.indexOf(nomePesquisa)

        if(posNome == -1){

            alert("Nome não encontrado! :(")
            
        }else{

            alert("Nome encontrado! :D")

        }

}

function Listar(){

    alert(nomes)

}
