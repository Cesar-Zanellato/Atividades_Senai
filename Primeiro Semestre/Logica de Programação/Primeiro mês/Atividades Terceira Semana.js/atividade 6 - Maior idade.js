/*Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.*/

let nome1, nome2, nome3, nome4, nome5, idade1, idade2 , idade3, idade4, idade5, media;


nome1 = prompt(`Digite o seu nome:`)
idade1 = Number(prompt(`${nome1} digite a sua idade: `))
nome2 = prompt(`Digite o seu nome:`)
idade2 = Number(prompt(`${nome2} digite a sua idade: `))
nome3 = prompt(`Digite o seu nome:`)
idade3 = Number(prompt(`${nome3} digite a sua idade: `))
nome4 = prompt(`Digite o seu nome:`)
idade4 = Number(prompt(`${nome4} digite a sua idade: `))
nome5 = prompt(`Digite o seu nome:`)
idade5 = Number(prompt(`${nome5} digite a sua idade: `))


media = ((idade1 + idade2 + idade3 + idade4 + idade5) / 5).toFixed(2)

if(idade1 > idade2 && idade1 > idade3 && idade1 > idade4 && idade1 > idade5){

    alert(`A média da idade é ${media}\n${nome1} é a pessoa com a maior idade, com ${idade1} `)

}else if(idade2 > idade1 && idade2 > idade3 && idade2 > idade4 && idade2 > idade5){

    alert(`A média da idade é ${media}\n${nome2} é a pessoa com a maior idade, com ${idade2} `)

}else if(idade3 > idade1 && idade3 > idade2 && idade3 > idade4 && idade3 > idade5){

    alert(`A média da idade é ${media}\n${nome3} é a pessoa com a maior idade, com ${idade3} `)

}else if(idade4 > idade1 && idade4 > idade2 && idade4 > idade3 && idade4 > idade5){

    alert(`A média da idade é ${media}\n${nome4} é a pessoa com a maior idade, com ${idade4} `)

}else{

    alert(`A média da idade é ${media}\n${nome5} é a pessoa com a maior idade, com ${idade5} `)

}

