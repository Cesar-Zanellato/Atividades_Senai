/*
Crie um objeto Ninja, por constructor function, com a propriedade de nome do ninja e o
método atirarShuriken;
*/

class Ninja{

    constructor(nome){
       this.nome = nome;
    }

    atirarShuriken(){
      console.log(this.nome + " atirou uma shuriken!");
    };
  }
  
  let ninja1 = new Ninja("Jiraiya");
  
  ninja1.atirarShuriken();