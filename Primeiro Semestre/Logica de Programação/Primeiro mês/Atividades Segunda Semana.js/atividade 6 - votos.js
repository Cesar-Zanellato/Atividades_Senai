/*Uma cidade prtende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/
 /* valor * 100/total*/

let votosTotal, candidatoX, candidatoY, votosBrancos, votosNulos;
let percX, percY, percBranco, percNulos;

    alert(`Essa pesquisa é para a eleição`)
    
    votosTotal = Number(prompt(`Qual o total de elitores você acha que tem nessa cidade?`))
    candidatoX = Number(prompt(`Total Candidato X: `))
    candidatoY = Number(prompt(`Total Candidato Y: `))
    votosBrancos = Number(prompt(`Total Brancos: `))
    votosNulos = Number(prompt(`Total Votos Nulo: `))

    percX = ((candidatoX * 100) / votosTotal).toFixed(2)
    percY = ((candidatoY * 100) / votosTotal).toFixed(2)
    percBranco = ((votosBrancos * 100) / votosTotal).toFixed(2)
    percNulos = ((votosNulos * 100) / votosTotal).toFixed(2)

    alert(`Resultado da pesquisa eleitoral foi,\nTotal de eleitores ${votosTotal}\n${percX}% votos para o candidatoX,\n${percY}% votos para o candidatoY,\n${percBranco}% votos brancos e\n${percNulos}% votos nulos.`)