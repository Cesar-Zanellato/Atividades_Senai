/*
 Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”
*/
let alistamento = []
let add
let ultimo
for(i=0; i<10; i++){

    add = prompt(`Houve alistamento no ano 200${i}? (S/N)`).toUpperCase()
    
    alistamento.push(add)
    
}
    
    ultimo = alistamento.lastIndexOf('S')
    console.log(ultimo)
    
if(alistamento != 0){

    alert(`O último alistamento foi em: 200${ultimo} `)

}else{

    alert(`Não houve alistamento nos últimos 10 anos`)
}