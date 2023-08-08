/*
No objeto ninja que a propriedade shuriken, com uma quantidade de estrelas ninjas. A
cada método do disparo subtraia uma. O ninja não pode jogar mais shurikens caso elas
tenham acabado
*/
class Ninja{

  constructor(nome, shuriken){
     this.nome = nome;
     this.shuriken = shuriken;
  }
  
  
      atirarShuriken(){
        if(this.shuriken > 0){
  
            this.shuriken--;
            console.log(this.nome + " atirou uma shuriken!" + "\nTem:" + this.shuriken + " Shurikens Sobrando.");
         
          }else{
  
              console.log(this.nome + " não tem mais shurikens")
          }
      };
  
  }
  
  let ninja1 = new Ninja("Jiraiya", 10);
  
  
      ninja1.atirarShuriken();
     
  console.log(ninja1.shuriken)