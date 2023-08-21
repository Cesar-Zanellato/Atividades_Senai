// C++ code
//

#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

int hora = 00;
int minutos = 00;
int tempo = 1000;//60000 = 1 min.


void setup()
{
  lcd_1.begin(16, 2);
  pinMode(hora, OUTPUT);
  pinMode(minutos, OUTPUT);
  
  digitalWrite(hora,1);
  digitalWrite(minutos,1);
}

void loop()
{	
  	
    delay(tempo);
    minutos = (minutos + 1);
  
  if(minutos == 60){
    
  	minutos = 0;
    hora = (hora + 1);
    if(hora == 24){
  
  	hora = 0;
  }


  }

  // tela
  lcd_1.setCursor(5,0);
  if(hora < 10) {
    lcd_1.print("0");
  }

  lcd_1.print(hora);
  lcd_1.print(":");

  if(minutos < 10) {
    lcd_1.print("0");
  }
  lcd_1.print(minutos);

}