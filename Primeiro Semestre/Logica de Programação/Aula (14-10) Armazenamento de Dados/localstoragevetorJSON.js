let numeros = []
let addNumero
let vetorArmazenado

    for(i=0; i < 3; i++){

        addNumero = Number(prompt("Digite um numero: "))
        numeros.push(addNumero)
    }

    localStorage.setItem('vetorNumeros', JSON.stringify(numeros))
    vetorArmazenado = JSON.parse(localStorage.getItem('vetorNumeros'))
    console.log(vetorArmazenado)

