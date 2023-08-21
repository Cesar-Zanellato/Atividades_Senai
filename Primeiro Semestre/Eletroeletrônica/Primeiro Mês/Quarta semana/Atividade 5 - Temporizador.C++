// C++ code
//

int minuto = 600;
int chuveiro = 5;
int led1 = 0;
int led2 = 1;
int led3 = 2;
int led4 = 3;
int led5 = 4;
  
void setup()
{
  pinMode(chuveiro, OUTPUT); 
  pinMode(led1, OUTPUT); 
  pinMode(led2, OUTPUT); 
  pinMode(led3, OUTPUT); 
  pinMode(led4, OUTPUT); 
  pinMode(led5, OUTPUT); 

  
  digitalWrite(chuveiro,1);
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  delay(minuto);
    
  
  digitalWrite(led1,0);
  delay(minuto);
  
  digitalWrite(led2,0);
  delay(minuto);
  
  digitalWrite(led3,0);
  delay(minuto);
  
  digitalWrite(led4,0);
  delay(minuto);
  
  for(int i=30; i>0; i--){
    digitalWrite(led5,1);
  	delay(100);
	digitalWrite(led5,0);
  	delay(100);
  }  
  digitalWrite(chuveiro,0);
}
void loop()
{ 
}