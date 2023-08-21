/*
Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.
*/
let coresPrimarias = []
let addCores
let coresSecundarias = []
let coresFinal = []


    for(i=0; i < 7; i++){

        if(i < 3){

            addCores = prompt('Digite uma cor primaria: ')
            coresPrimarias.push(addCores)
            coresFinal.push(addCores)

        }else if(i < 6){
        
            addCores = prompt('Digite uma cor secundaria: ')
            coresSecundarias.push(addCores)
            coresFinal.push(addCores)

        }else{

        
            addCores = prompt('Adicionar cor no início da lista: ')
            coresFinal.unshift(addCores)

            addCores = prompt('Adicionar cor no final da lista: ')
            coresFinal.push(addCores)
        }
    }

    alert(`Vetor Primarias: ${coresPrimarias} \nVetor Secundarias: ${coresSecundarias} \nVetor Final: ${coresFinal}.`)