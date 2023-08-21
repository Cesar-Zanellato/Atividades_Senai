 /*
 Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo,
 exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos.
 Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental.
 Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo)
 existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. (JS)
*/

//Cria variáveis para armazenar os números
let numeroCasal, numeroSolteiro, espacoCasal, espacoSolteiro, espacoTotal;
let casal = 400, individuo = 320

 //avisa o usuario sobre o que e o site
 alert("Essa é uma pesquisa de ocupação dos leões baios da reserva ambiental")
 
 //Recebe dados dos numeros e armazena nas variáveis
 numeroCasal = Number(prompt(`Existem nessa reserva ambiental 9 fêmeas e 5 machos\nDigite quantos casais de leões baios você acha que existem na reserva ambiental: `))
 numeroSolteiro = Number(prompt(`Já que exitem ${numeroCasal} casais de leões baios\nDigite quantos leões baios "solteiros" você acha que existem na reserva ambiental: `))

 
 //realiza o calculo e armazena na variável
 espacoCasal = (numeroCasal * casal)
 espacoSolteiro = (numeroSolteiro * individuo)
 espacoTotal = (espacoCasal + espacoSolteiro)

 //Mostra mensagem com o resultado na tela
 alert(`Existem ${numeroCasal} casais de leões baios que ocupam ${espacoCasal}Km²,\ne existem outros ${numeroSolteiro} leões baios que ocupam ${espacoSolteiro}Km².\nO todal da área reservada para os leões baios é ${espacoTotal}Km²`)