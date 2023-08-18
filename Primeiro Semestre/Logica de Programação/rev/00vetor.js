let n
let zero=0, um=0, dois=0, tres=0, quatro=0, cinco=0, seis=0, sete=0, oito=0, nove=0, dez=0;
let numeros = []
let contagens = [0,0,0,0,0,0,0,0,0,0,0]
for(let i=0; i<10000; i++){
    n = Math.random()*10
    n = Math.round(n)
    numeros.push(n)
    // contarNumeros()
    contagens[n]++
}
//console.table(numeros)
console.table(contagens)

// console.log(zero);
// console.log(um);
// console.log(dois);
// console.log(tres);
// console.log(quatro);
// console.log(cinco);
// console.log(seis);
// console.log(sete);
// console.log(oito);
// console.log(nove);
// console.log(dez);

// function contarNumeros(){
//     contagens[n]++
// }

// function contarNumeros(){
//     switch(n){
//         case 0: zero++
//         break
//         case 1: um++
//         break
//         case 2: dois++
//         break
//         //...
//         case 10: dez++

//     }
// }

// function contarNumeros(){
//     if(n == 0) {zero++}
//     if(n == 1) {um++}
//     if(n == 2) {dois++}
//     if(n == 3) {tres++}
//     if(n == 4) {quatro++}
//     if(n == 5) {cinco++}
//     if(n == 6) {seis++}
//     if(n == 7) {sete++}
//     if(n == 8) {oito++}
//     if(n == 9) {nove++}
//     if(n == 10) {dez++}
// }