/*Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)
*/

let geracao;

geracao = Number(prompt(`Digite o ano do seu nacimento:`))

    switch(geracao){

        case geracao < 1945:
        alert(`Você não pertence a uma geração conhecida!`)
        break

        case geracao >= 1946 && geracao <= 1964:
        alert(`Você a geração Baby Boomers!`)
        break

        case geracao >= 1965 && geracao <= 1980:
        alert(`Você a geração Geração X!`)
        break

        case geracao >= 1981 && geracao <= 1996:
        alert(`Você a geração Geração Y/Millennials!`)
        break

        case geracao >= 1997 && geracao <= 2010:
        alert(`Você a geração Geração Z!`)
        break

        case geracao > 2010:
        alert(`Você a geração Geração Alfa!`)
        break

    }