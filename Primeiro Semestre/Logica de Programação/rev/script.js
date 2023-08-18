let n = Number(prompt("Número: "))

let i = 0;
while(i <= n){
    console.log(i)
    i++;
}

for(i = 0; i <= n; i++){
    console.log(i)
}


let idade
do{
    idade = Number(prompt("Digite sua idade: (0..100)"))
}while(idade < 0)

console.log(idade)


let idade = Number(prompt("Digite sua idade:"))
while(idade < 0){
    idade = Number(prompt("Digite sua idade:"))
}

vetor = [0, 14, 'e', 450]

vetor[1]

Math.floor(0.1) // 0
Math.ceil(0.1) // 1
Math.round(0.1) // 0
Math.round(0.5) // 1


let n
let numeros = []
for(let i=0; i<100; i++){
    n = Math.random()*10
    n = Math.round(n)
    numeros.push(n)
    contarNumeros()
}
console.table(numeros)

function contarNumeros(){
    
}




