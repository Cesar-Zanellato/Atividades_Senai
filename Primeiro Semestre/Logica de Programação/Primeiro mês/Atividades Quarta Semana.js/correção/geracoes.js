/* Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011) */

let anoNascimento

    anoNascimento = Number(prompt("Digite o ano que nasceu:"))

    switch(true){

        case anoNascimento <= 1945:

            alert("Você é um sem geração! :(")
            break

        case anoNascimento >= 1946 && anoNascimento <= 1964:

            alert("Você é um Baby Boomer! :(")
            break

        case anoNascimento >= 1965 && anoNascimento <= 1980:

            alert("Você é um sem geração X! :(")
            break

        case anoNascimento >= 1981 && anoNascimento <= 1996:

            alert("Você é um geração Y ou Millenials! :)")
            break

        case anoNascimento >= 1997 && anoNascimento <= 2010:

            alert("Você é um geração Z! :)")
            break

        case anoNascimento >= 2011:

            alert("Você é um geração Alfa! :)")
            break


    }