/*>>>>>>>>>>>>>>>>>> Atividade 3 (4,0) <<<<<<<<<<<<<<<<<<<<

Desenvolver a lógica de respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 3 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica.

1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

A) Van Helsing (3 pontos)
B) Castlevania (3 pontos)
C) The Vampire Diaries (2 pontos)
D) Blade: The Series (1 ponto)


2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

A) Alice no País das Maravilhas (3 pontos)
B) O Hobbit (2 pontos)
C) A Fantástica Fábrica de Chocolates (3 pontos)
D) Coraline (2 pontos)


3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

A) The Legend of Zelda (3 pontos)
B) Kirby (2 pontos)
C) Metroid (2 pontos)
D) Super Mario Bros (4 pontos)


Critérios de avaliação:

(1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
(1,0) Validar para que respostas com letra minúscula (a, b, c, d) também somem os pontos.
(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
(1,0) Mostrar a pontos ao final. Se conseguir pontuação máxima (10 pontos), incluir "Parabéns!"


*/
let pergunta;
let pontos = 0;

alert("Olá, esse é um quiz sobre cultura pop, composto por três perguntas: ")


pergunta = prompt("Primeira pergunta: \nQuais séries a seguir englobam melhor a temática de vampiros e assombração? \nA) Van Helsing \nB) Castlevania \nC) The Vampire Diaries \nD) Blade: The Series").toUpperCase()

    switch(pergunta1){

        case "A":
        pontos =+ 3
        break

        case "B":
        pontos =+ 3
        break

        case "C":
        pontos =+ 2
        break

        case "D":
        pontos =+ 1
        break

        default :
        alert("Você não escolheu nenhuma das alternativas anteriores, Então você não receberá pontos por essa pergunta.")

    }


pergunta = prompt("Segunda pergunta: \nDentre os livros abaixo, quais incluem melhor a temática de fantasia? \nA) Alice no País das Maravilhas \nB) O Hobbit \nC) A Fantástica Fábrica de Chocolates \nD) Coraline").toUpperCase()

    switch(pergunta2){

        case "A":
        pontos =+ 3
        break
    
        case "B":
        pontos =+ 2
        break
    
        case "C":
        pontos =+ 3
        break
    
        case "D":
        pontos =+ 2
        break

        default :
        alert("Você não escolheu nenhuma das alternativas anteriores, Então você não receberá pontos por essa pergunta.")

    }


pergunta = prompt("Terceira pergunta: \nQuais das franquias listadas, representam melhor a empresa de jogos Nintendo? \nA) The Legend of Zelda \nB) Kirby \nC) Metroid \nD) Super Mario Bros").toUpperCase()

    switch(pergunta3){

        case "A":
        pontos =+ 3
        break
            
        case "B":
        pontos =+ 2
        break
            
        case "C":
        pontos =+ 2
        break
            
        case "D":
        pontos =+ 4
        break

        default :
        alert("Você não escolheu nenhuma das alternativas anteriores, Então você não receberá pontos por essa pergunta.")
        
    }


switch(pontos){
        
        case 10:
        alert(`Sua pontuação foi de ${pontos} Pontos, Parabéns.`)
        break

        default:
        alert(`Sua pontuação foi de ${pontos} Pontos.`)
        
}