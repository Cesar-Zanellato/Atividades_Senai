/*
Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.
*/
let vetorUm = [16, 18, 20]
let vetorDois = [17, 19, 21]
let vetorTres = []


for(i=0; i<3; i++){

    vetorTres.push(vetorUm[i], vetorDois[i])

}

alert(vetorTres)