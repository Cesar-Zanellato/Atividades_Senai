let imagemJogador = document.getElementById("imgJogador")
let imagemSistema = document.getElementById("imgSistema")

let resultadoJogo = document.getElementById("lbResultado")

let rodadasJogo = document.getElementById("lbRodadas")
let jogadorPts = document.getElementById("lbJogadorPts")
let sistemasPts = document.getElementById("lbSistemaPts")

let botaoJogar = document.getElementById("btnJogar")
let botaoReiniciar = document.getElementById("btnReiniciar")

let JogadorPontos = 0
let SistemaPontos = 0
let rodadasTotal = 0

let indiceImgJogador = 0
let indiceImgSistema = 0

let efeitoConfirma = document.getElementById("somConfirma")
let efeitoSeleciona = document.getElementById("somSeleciona")



function trocaImagem(){

    if(botaoJogar.disabled == false){

        efeitoSeleciona.play()

        switch(indiceImgJogador){

            case 0:

                imagemJogador.src = "img/rock-img-new.png"
                indiceImgJogador = 1
                break

            case 1:

                imagemJogador.src = "img/paper-img-new.png"
                indiceImgJogador = 2
                break

            case 2:

                imagemJogador.src = "img/scissor-img-new.png"
                indiceImgJogador = 3
                break

            case 3:

                imagemJogador.src = "img/rock-img-new.png"
                indiceImgJogador = 1
                break

        }
    }

}

function Jogar(){

    
    if(indiceImgJogador != 0){
        
        efeitoSeleciona.onplay()

        botaoJogar.disabled = true;

        
        indiceImgSistema = Math.floor(Math.random() * (3) + 1)
        
        
        switch(indiceImgSistema){

            case 1:

                imagemSistema.src = "img/rock-img-new.png"
                break
                
            case 2:
                    
                imagemSistema.src = "img/paper-img-new.png"
                break
                
            case 3:
                    
                imagemSistema.src = "img/scissor-img-new.png"
                break
        }
            Resultado()   
    }
}

// 1 - Pedra    2 - Papel   3 - Tersoura 

function Resultado(){

    rodadasTotal++;
    rodadasJogo.innerHTML = `Rodadas ${rodadasTotal}`

    if(rodadasTotal == 5){
     
        botaoReiniciar.disabled = true
    }

    if(indiceImgJogador == 1 && indiceImgSistema == 2 || indiceImgJogador == 3 && indiceImgSistema == 1 || indiceImgJogador == 2 && indiceImgSistema == 3){

        SistemaPontos++;
        sistemasPts.innerHTML = `Rodadas = ${SistemaPontos}`
        resultadoJogo.innerHTML = `Sistema VENCEU!`
    }


    if(indiceImgJogador == 2 && indiceImgSistema == 1 || indiceImgJogador == 1 && indiceImgSistema == 3 || indiceImgJogador == 3 && indiceImgSistema == 2){

        JogadorPontos++;
        jogadorPts.innerHTML = `Rodadas = ${JogadorPontos}`
        resultadoJogo.innerHTML = `Jogador VENCEU!`
    }

    if(indiceImgJogador == indiceImgSistema){

        resultadoJogo.innerHTML = `EMPATE!`
    }

}


function Reiniciar(){
    

    imagemJogador.src = "img/frame-player.png"
    imagemSistema.src = "img/frame-sistema.png"
    resultadoJogo.innerHTML = `-> Resultado <-`

    botaoJogar.disabled = false;

    indiceImgJogador = 0
    indiceImgSistema = 0

}