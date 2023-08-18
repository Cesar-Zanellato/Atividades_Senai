/*
Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra
*/
let vetorNumeros = [8, 2, 8, 2, 8, 7, 12, 8, 18]
let caixinha = []
let pesquisaNumero

numerosPesquisa = Number(prompt("Qual o número quer saber? "))

for(i=0; i<vetorNumeros.length; i++){

if(vetorNumeros[i] == pesquisaNumero){

    caixinha.push(i)
}
}
alert(`Posições encontradas: ${caixinha}.`)