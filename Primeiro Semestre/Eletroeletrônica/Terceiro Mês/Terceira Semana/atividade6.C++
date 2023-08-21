#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);

#define butao 5
#define balcao 4
#define cozinha 3
#define banheiro 2

#define red1 6
#define green1 10

int ligado;
int iDesligado = 0;
int iLigado = 0;
int pisca;

void setup()
{
  lcd_1.begin(16, 2);
  pinMode(butao, INPUT_PULLUP);
  pinMode(balcao, INPUT_PULLUP);
  pinMode(cozinha, INPUT_PULLUP);
  pinMode(banheiro, INPUT_PULLUP);
  pinMode(green1, OUTPUT);
  pinMode(red1, OUTPUT);
  Serial.begin(9600);
}

void loop(){

    
        if(digitalRead(butao) == 0 && ligado == 0){

            Ligado();
            ligado = 1;
        }


        if(digitalRead(butao) == 0 && ligado == 1){

            Desligado();
            ligado = 0;
        }

        

        if(ligado == 1){
            if(digitalRead(balcao) == 0){

                functionBalcao();
            }

            if(digitalRead(cozinha) == 0){

                functionCozinha();
            }

            if(digitalRead(banheiro) == 0){

                functionBanheiro();

            }

        }
    
    delay(500);
    
}

void functionCozinha(){

    lcd_1.clear();
	lcd_1.print("cozinha");
    delay(1000);
    
    Pisca();
}

void functionBanheiro(){

    lcd_1.clear();
    lcd_1.print("banheiro");
    delay(1000);

    Pisca();
}

void functionBalcao(){

    lcd_1.clear();
    lcd_1.print("balcao");
    delay(1000);

    Pisca();
}


void Ligado(){

    lcd_1.clear();
    lcd_1.print("Ligado");
    iLigado = 50;

    if(iLigado > 0){
        digitalWrite(green1, 1);
        delay(50);
        digitalWrite(green1, 0);
        iLigado--;
        }


}

void Desligado(){

    lcd_1.clear();
    lcd_1.print("Desligado");
    iDesligado = 50;

    if(iDesligado > 0){
        digitalWrite(red1, 1);
        delay(50);
        digitalWrite(red1, 0);
        iDesligado--;
        }

}

void Pisca(){

    pisca = 0;
    do{
        digitalWrite(red1, 1);
        delay(100);
        digitalWrite(red1, 0);
      delay(100);
        pisca++;

    }while(pisca < 50);
}