#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

#define b1 3
#define b2 4
#define b3 6
#define b4 7

int leitura;
float temperatura;
int tempMax = 28;
int tempMin = 26;

void setup()
{
  lcd_1.begin(16, 2);
  pinMode(A0, INPUT);
  pinMode(2, OUTPUT);

  pinMode(b1, INPUT_PULLUP);
  pinMode(b2, INPUT_PULLUP);
  pinMode(b3, INPUT_PULLUP);
  pinMode(b4, INPUT_PULLUP);

  lcd_1.clear();
  lcd_1.print("Max:");
  lcd_1.setCursor(5,0);
  lcd_1.print("Min:");
  lcd_1.setCursor(0,1);
  lcd_1.print("Temp:");

}

void loop()
{
  
  leitura = analogRead(A0);
  temperatura = (leitura - 100) / 2;

  if(digitalRead(b1) == 1){
    tempMax++;
  };
  if(digitalRead(b2) == 1){
    tempMax--;
  };

  if(digitalRead(b3) == 1){
    tempMin++;
  };
  if(digitalRead(b4) == 1){
    tempMin--;
  };


  if(temperatura > tempMax){
    digitalWrite(1,1);
  };
  if(temperatura < tempMin){
    digitalWrite(1,0);
  };

  lcd_1.setCursor(0,0);
  lcd_1.print(tempMax);
  lcd_1.setCursor(7,0);
  lcd_1.print(tempMin);
  lcd_1.setCursor(5,1);
  lcd_1.print(temperatura);
 
  delay(100);
}