/*Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!"*/

let nomeEspecie, populacaoTotal;

nomeEspecie = prompt(`Digite o nome da espécie: `)
populacaoTotal = Number(prompt(`Digite a população da especie ${nomeEspecie}: `))

if(populacaoTotal > 1000){

    alert(`A espécie ${nomeEspecie} está classificada como espécie vulnerável.`)

}else if(populacaoTotal < 500){

    alert(`A espécie ${nomeEspecie} está classificada como espécie criticamente em perigo.`)

}else{

    alert(`A espécie ${nomeEspecie} está classificada como espécie em perigo.`)

}