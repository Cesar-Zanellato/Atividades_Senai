/*
Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.
*/
let vetorUm = [], addVetorUm = []
let vetorDois = [], addVetorDois = []
let vetorTres = []

for(i=0; i<3; i++){

    if(i<3){
    addVetorUm = Number(prompt(`Digite um número para a lista um: `))
    vetorUm.push(addVetorUm)
   }else{

    addVetorDois = Number(prompt(`Digite um número para a lista dois: `))
    vetorDois.push(addVetorDois)
}
}

for(i=0; i<3; i++){

    vetorTres.push(vetorUm[i], vetorDois[i])

}

alert(vetorTres)