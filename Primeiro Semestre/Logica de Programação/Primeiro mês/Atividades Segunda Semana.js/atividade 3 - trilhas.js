/*Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida(quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.*/

 //Criar variáveir para armazernar os dados da trilha
 let distancia, tempo, velocidadeMedia;
    
    // Recebe o os dados da trilha e armazerna nas variáveis
    distancia = Number(prompt("digite a distância percorrida (Quilômetros) : "))
    tempo = Number(prompt("digite o tempo que você levou para percorrer a distância (Horas): "))

    //Realiza o cálculo e armarzena na variável
    velocidadeMedia = (distancia / tempo).toFixed(2)

    //Mostra mensagem com o resultado na tela
    alert(`Sua média de velocidade durante essa trilha foi de ${velocidadeMedia} km/h`)