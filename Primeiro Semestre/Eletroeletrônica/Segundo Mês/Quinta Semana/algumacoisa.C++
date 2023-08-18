
#define b1 13 
#define b2 11
#define b3 9
#define b4 7

void setup(){
    pinMode(b1, INPUT_PULLUP);
    pinMode(b2, INPUT_PULLUP);
    pinMode(b3, INPUT_PULLUP);
    pinMode(b4, INPUT_PULLUP);
    Serial.begin(9600);
}

void loop(){

    if(digitalRead(b1) == 0){
        Serial.print("Parabéns!\nGanhou um pirulito\n");
        while(digitalRead(b1) == 0);
    }
    if(digitalRead(b2) == 0){
        Serial.print("Parabéns!\nGanhou uma cerveja\n");
        while(digitalRead(b2) == 0);
    }
    if(digitalRead(b3) == 0){
        Serial.print("Parabéns!\nGanhou uma bicicleta\n");
        while(digitalRead(b3) == 0);
    }
    if(digitalRead(b4) == 0){
        Serial.print("Parabéns!\nGanhou um Uno 0km\n");
        while(digitalRead(b4) == 0);
    }
}