let playerImg = document.getElementById("framePlayer")
let systemImg = document.getElementById("frameSystem")
let result = document.getElementById("lbResult")
let playerPts = document.getElementById("lbPlayer")
let systemPts = document.getElementById("lbSystem")
let gameRnds = document.getElementById("lbRounds")

let buttonPlay = document.getElementById("btnPlay")

let selectSound = document.getElementById("select")
let confirmSound = document.getElementById("confirm")

let playerImgIndex = 0
let systemImgIndex = 0

let playerPoints = 0
let systemPoints = 0
let gameRounds = 0

function changeImage(){

    if(buttonPlay.disabled == false){

        confirmSound.play()

        switch(playerImgIndex){
    
            case 0:
    
                playerImg.src = "../JoKenPô/img/rock-img-new.png"
                playerImgIndex = 1
                break
    
            case 1:
    
                playerImg.src = "../JoKenPô/img/paper-img-new.png"
                playerImgIndex = 2
                break
    
            case 2:
    
                playerImg.src = "../JoKenPô/img/scissor-img-new.png"
                playerImgIndex = 3
                break
    
            case 3:
    
                playerImg.src = "../JoKenPô/img/rock-img-new.png"
                playerImgIndex = 1
                break
    
        }

    }


}

function playGame(){

    selectSound.play()
    systemImgIndex = Math.floor(Math.random() * (3) + 1)

    switch(systemImgIndex){

        case 1:

            systemImg.src = "../JoKenPô/img/rock-img-new.png"
            systemImgIndex = 1
            break

        case 2:

            systemImg.src = "../JoKenPô/img/paper-img-new.png"
            systemImgIndex = 2
            break

        case 3:

            systemImg.src = "../JoKenPô/img/scissor-img-new.png"
            systemImgIndex = 3
            break

    }
    
    buttonPlay.disabled = true
    showResult()

}

function showResult(){

    gameRounds++
    gameRnds.innerHTML = `Rodadas = ${gameRounds}`

    if(playerImgIndex == systemImgIndex){

        result.innerHTML = 'EMPATE!'

    }

    if(playerImgIndex == 1 && systemImgIndex == 3){

        result.innerHTML = 'Jogador VENCEU!'
        playerPoints++
        playerPts.innerHTML = `Jogador = ${playerPoints}`

    }

    if(playerImgIndex == 2 && systemImgIndex == 1){

        result.innerHTML = 'Jogador VENCEU!'
        playerPoints++
        playerPts.innerHTML = `Jogador = ${playerPoints}`

    }

    if(playerImgIndex == 3 && systemImgIndex == 2){

        result.innerHTML = 'Jogador VENCEU!'
        playerPoints++
        playerPts.innerHTML = `Jogador = ${playerPoints}`

    }

    if(playerImgIndex == 3 && systemImgIndex == 1){

        result.innerHTML = 'Sistema VENCEU!'
        systemPoints++
        systemPts.innerHTML = `Sistema = ${systemPoints}`

    }

    if(playerImgIndex == 1 && systemImgIndex == 2){

        result.innerHTML = 'Sistema VENCEU!'
        systemPoints++
        systemPts.innerHTML = `Sistema = ${systemPoints}`

    }

    if(playerImgIndex == 2 && systemImgIndex == 3){

        result.innerHTML = 'Sistema VENCEU!'
        systemPoints++
        systemPts.innerHTML = `Sistema = ${systemPoints}`

    }

}

function restartGame(){

    playerImg.src = "../JoKenPô/img/frame-player.png"
    systemImg.src = "../JoKenPô/img/frame-sistema.png"
    buttonPlay.disabled = false
    result.innerHTML = '-> Resultado <-'
    
}