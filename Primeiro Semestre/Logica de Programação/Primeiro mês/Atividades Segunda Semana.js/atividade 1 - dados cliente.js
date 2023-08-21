/* crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianopolis."
*/

//Cria variáveis para armazenar os dados
let nome, idade, nacionalidade, endereco, numerocasa, cidade;

    //Recebe os dados e armazena nas variáveis
    nome = prompt("digite o seu nome: ")
    idade = prompt("digite a sua idade")
    nacionalidade = prompt("digite a sua nacionalidade")
    cidade = prompt("digite a sua cidade")
    endereco = prompt("digite o seu endereço")
    numerocasa = prompt("digite o numero da sua residencia")

    //Mostra mensagem com o resultado na tela
    alert(`Cliente ${nome}, com ${idade} anos,${nacionalidade}, reside no endereço ${endereco}, ${numerocasa}, ${cidade}`)