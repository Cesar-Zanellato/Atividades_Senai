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
  	
  	lcd_1.setCursor(8,0);
    lcd_1.print(minutos);
  
  	lcd_1.setCursor(7,0);
  	lcd_1.print(":");
  
  	lcd_1.setCursor(5,0);
  	lcd_1.print(hora);

  
    delay(tempo);
    minutos = (minutos + 1);
  
    switch(minutos){

        case 60:
        minutos = minutos - 60
        lcd_1.clear()
        hora = hora + 1

    }

  
}












/*if(minutos == 60){
    
  	minutos = (minutos - 60);
  	lcd_1.clear();
    hora = (hora + 1);
    
  }else if(hora == 24){
  
  	hora = (hora - 24);
  	lcd_1.clear();
    
  }else{}*/