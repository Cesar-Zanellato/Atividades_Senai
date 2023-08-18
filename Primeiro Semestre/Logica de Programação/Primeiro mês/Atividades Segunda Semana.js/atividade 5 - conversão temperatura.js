/*Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit.Mostrar o resultado na tela.*/


//Criar variáveir para amazernar os dados
let celsius, fahrenheit;

//Recebe os dados e armazena nas variáveis
celsius = Number(prompt("digite a temperatura em graus Celsius: "))

//Calcula os dados recebidos
fahrenheit = ((celsius * 1.8) + 32).toFixed(2)
 
//Mostra mensagem com o resultado na tela
alert(`Esta temperatura ${celsius}° C, em Fahrenheit é ${fahrenheit}°F.`)