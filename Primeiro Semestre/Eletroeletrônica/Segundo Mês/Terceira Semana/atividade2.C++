// C++ code
//
#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

#define cooler 13;

int tempo = 300;
int segundo = 50;

void setup()
{
  pinMode(cooler, OUTPUT);
  lcd_1.begin(16, 2);
}

void loop()
{
    lcd_1.setCursor(6,1);
    if(tempo < 100){
        lcd_1.print("0"); 
    }
    if(tempo < 10){
        lcd_1.print("0"); 
    }
    lcd_1.print(tempo);
    delay(segundo);
    tempo--;
    if(tempo == 0){
        tempo = 300;
    }
    if(tempo <= 60){
            digitalWrite(cooler, 1);
        }else{
            digitalWrite(cooler, 0);
        }
    if(tempo == 60){
        lcd_1.setCursor(3,0);
        lcd_1.print("          ");
        lcd_1.print("Ligado");
    }
    if(tempo == 300){
        lcd_1.setCursor(3,0);
        lcd_1.print("          ");
        lcd_1.print("Desligado");
    }
}