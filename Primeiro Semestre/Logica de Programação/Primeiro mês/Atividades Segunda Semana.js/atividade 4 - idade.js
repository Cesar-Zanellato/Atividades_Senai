/*Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos,em meses, em dias e em semanas.*/

  //Criar variáveir para amazernar os dados do Cliente
  let anoNascimento, anoAtual, idade, meses, semanas, dias;
    
    //Recebe os dados e armazena nas variáveis
    anoNascimento = Number(prompt("digite o ano do seu nascimento (YYYY): "))
    anoAtual = Number(prompt("digite o ano atual: "))
    
    //Calcula os dados recebidos
    idade = anoAtual - anoNascimento
    meses = idade * 12
    semanas = idade * 52
    dias = idade * 365

    //Mostra mensagem com o resultado na tela
    alert(`Sua idade é ${idade}?\nSua idade em meses seria ${meses}\nSua idade em semanas seria ${semanas}\nSua idade em dias seria ${dias}`)