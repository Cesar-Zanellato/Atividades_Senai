/*
Crie um objeto Inimigo, com as propriedades nome e vivo (que é um boolean e inicie como
true). O método atirarShuriken do exercício passado deve ‘matar’ o Inimigo, setando a
propriedade do Inimigo vivo como false.
*/

class Ninja{

    constructor(nome, shuriken){

        this.nome = nome;
        this.shuriken = shuriken;
        this.vivo = vivo;
    }

    atirarShuriken(inimigo){

        if(this.shuriken > 0){
  
            this.shuriken--;
            console.log(this.nome + " atirou uma shuriken!" + "\nTem:" + this.shuriken + " Shurikens Sobrando.");
            inimigo1.vivo = false;
            console.log(inimigo1);

          }else{
  
              console.log(this.nome + " não tem mais shurikens")
          }
    };
};

let ninja1 = new Ninja("Jiraiya", 10);    
let inimigo1 = new Ninja("Obito", 10);

ninja1.atirarShuriken(inimigo1);