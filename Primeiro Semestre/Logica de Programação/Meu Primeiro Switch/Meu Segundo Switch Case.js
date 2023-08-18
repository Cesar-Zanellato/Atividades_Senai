let numero;


numero = Number(prompt(`Digite um número!`))


    switch(true){

        case numero > 10 :
        
            alert(`O número é maior que 10!`)
            break
            
        case numero < 10 :

            alert(`O número é menor que 10!`)
            break

        case numero == 10 :

            alert(`O número é 10!`)
            break

        default: 
        
            alert("O número é nada!")

    }