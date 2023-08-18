#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

int tempo = 500;

void setup()
{
    lcd_1.begin(16, 2);
    pinMode(0, OUTPUT);
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
	pinMode(13, OUTPUT);

}

void loop()
{
  lcd_1.clear();
  lcd_1.setCursor(0, 0);
  lcd_1.print("Porta logica E:");
  lcd_1.setCursor(3, 1);
  lcd_1.print("V E V = V");
  led1();
  delay(tempo);
  

  lcd_1.setCursor(3, 1);
  lcd_1.print("V E F = F");
  led2();
  delay(tempo);

  lcd_1.setCursor(3, 1);
  lcd_1.print("F E V = F");
  led3();
  delay(tempo);

  lcd_1.setCursor(3, 1);
  lcd_1.print("F E F = F");
  led7()
  delay(tempo);
  


  lcd_1.setCursor(0, 0);
  lcd_1.print("Porta logica OU:");
  lcd_1.setCursor(3, 1);
  lcd_1.print("V OU V = V");
  led4();
  delay(tempo);
  
  lcd_1.setCursor(3, 1);
  lcd_1.print("V OU F = V");
  led5();
  delay(tempo);

  lcd_1.setCursor(3, 1);
  lcd_1.print("F OU V = V");
  led6();
  delay(tempo);

  lcd_1.setCursor(3, 1);
  lcd_1.print("F OU F = F");
  led7()
  delay(tempo);
}
    
    
    void led1()
    {
    digitalWrite(0, 1);
    digitalWrite(1, 1);
    for(int i=20; i>0; i--){
    digitalWrite(2,1);
  	delay(100);
	digitalWrite(2,0);
  	delay(100);
  }
    digitalWrite(0, 0);
    digitalWrite(1, 0);
    digitalWrite(2, 0);
    }

    void led2()
    {
    digitalWrite(0, 1);
    delay(tempo);
    digitalWrite(0, 0);
    }

    void led3()
    {
    digitalWrite(1, 1);
    delay(tempo);
    digitalWrite(1, 0);
    }

    void led4()
    {
    digitalWrite(0, 1);
    digitalWrite(1, 1);
    digitalWrite(2, 1);
    for(int i=30; i>0; i--){
    digitalWrite(2,1);
  	delay(100);
	digitalWrite(2,0);
  	delay(100);
  }

    digitalWrite(0, 0);
    digitalWrite(1, 0);
    digitalWrite(2, 0);
    }
    
    void led5()
    {
    digitalWrite(0, 1);
    digitalWrite(2, 1);
    for(int i=30; i>0; i--){
    digitalWrite(2,1);
  	delay(100);
	digitalWrite(2,0);
  	delay(100);
  }
    digitalWrite(0, 0);
    digitalWrite(2, 0);
    }
    
    void led6()
    {
    digitalWrite(1, 1);
    digitalWrite(2, 1);
    for(int i=30; i>0; i--){
    digitalWrite(2,1);
  	delay(100);
	digitalWrite(2,0);
  	delay(100);
  }
    digitalWrite(1, 0);
    digitalWrite(2, 0);
    }

    void led7()
    {
    digitalWrite(13, 1);
    delay(tempo)
    digitalWrite(13, 0);
    }