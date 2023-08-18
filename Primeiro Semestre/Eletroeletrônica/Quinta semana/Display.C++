// C++ code
//

#include <LiquidCrystal.h>

int seconds = 0;

LiquidCrystal lcd_1(12, 11, 5, 4, 3, 2);

void setup()
{
  lcd_1.begin(16, 2);

  
}

void loop()
{
  lcd_1.clear();
  lcd_1.setCursor(8, 0);
  lcd_1.print("Cesar");
  delay(1000);
  
  lcd_1.clear();
  lcd_1.setCursor(5, 1);
  lcd_1.print("Cesar");
  delay(1000);
}