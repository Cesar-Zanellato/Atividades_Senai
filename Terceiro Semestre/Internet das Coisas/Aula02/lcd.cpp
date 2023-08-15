#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

int leitura;
double valor;
// float valor;

void setup()
{
  lcd_1.begin(16, 2);
  pinMode(A0, INPUT);
  pinMode(1, OUTPUT);

  
  lcd_1.print("Voltimetro:");
  lcd_1.setCursor(0,1);
  lcd_1.print("Tensao:");
}

void loop()
{
  leitura = analogRead(A0);
  valor = leitura * 0.0048875855327468;

  if(valor <= 4){  
    digitalWrite(1, 0);
  }else{
    digitalWrite(1, 1);
  };

  lcd_1.clear();
  lcd_1.setCursor(12,0);
  lcd_1.print(leitura);
  lcd_1.print("   ");
  lcd_1.setCursor(8,1);
  lcd_1.print(valor);
  lcd_1.print("V");

  delay(500);
}