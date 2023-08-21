#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

int red1 = 0, red2= 3, red3 = 6;
int green1 = 2, green2= 5, green3 = 8;

int tempo = 500;

void setup()
{
    lcd_1.begin(16, 2);
    pinMode(green1, OUTPUT);
    pinMode(green2, OUTPUT);
    pinMode(green3, OUTPUT);
  	pinMode(red1, OUTPUT);
    pinMode(red2, OUTPUT);
    pinMode(red3, OUTPUT);
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
  led7();
  
  


  lcd_1.setCursor(0, 0);
  lcd_1.print("Porta logica OU:");
  lcd_1.setCursor(3, 1);
  lcd_1.print("V OU V = V");
  led1();
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
  led7();
  
}
    
    
    void led1()
    {
    digitalWrite(green1, 1);
    digitalWrite(green2, 1);
    for(int i=20; i>0; i--){
    digitalWrite(green3,1);
  	delay(100);
	digitalWrite(green3,0);
  	delay(100);
  }
    digitalWrite(green1, 0);
    digitalWrite(green2, 0);
    digitalWrite(green3, 0);
    digitalWrite(red1, 0);
    digitalWrite(red2, 0);
    digitalWrite(red3, 0);
    }

    void led2()
    {
    digitalWrite(green1, 1);
    digitalWrite(red2, 1);
    digitalWrite(red3, 1);
    delay(tempo);
    digitalWrite(green1, 0);
    digitalWrite(red2, 0);
    digitalWrite(red3, 0);
    }

    void led3()
    {
    digitalWrite(red1, 1);
    digitalWrite(green2, 1);
    digitalWrite(red3, 1);
    delay(tempo);
    digitalWrite(red1, 0);
    digitalWrite(green2, 0);
    digitalWrite(red3, 0);
    }
    
    void led5()
    {
    digitalWrite(green1, 1);
    digitalWrite(red2, 1);
    digitalWrite(green3, 1);
    for(int i=30; i>0; i--){
    digitalWrite(green3,1);
  	delay(100);
	digitalWrite(green3,0);
  	delay(100);
  }
    digitalWrite(green1, 0);
    digitalWrite(red2, 0);
    digitalWrite(green3, 0);
    }
    
    void led6()
    {
    digitalWrite(red1, 1);
    digitalWrite(green2, 1);
    digitalWrite(green3, 1);
    for(int i=30; i>0; i--){
    digitalWrite(green3,1);
  	delay(100);
	digitalWrite(green3,0);
  	delay(100);
  }
    digitalWrite(red1, 0);
    digitalWrite(green2, 0);
    digitalWrite(green3, 0);
    }

    void led7()
    {
    digitalWrite(red1, 1);
    digitalWrite(red2, 1);
    digitalWrite(red3, 1);
    digitalWrite(13, 1);
    delay(tempo);
    digitalWrite(red1, 0);
    digitalWrite(red2, 0);
    digitalWrite(red3, 0);
    digitalWrite(13, 0);
    }