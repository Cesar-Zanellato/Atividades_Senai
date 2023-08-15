void setup(){

    pinMode(3, OUTPUT);
    pinMode(4, INPUT_PULLUP);
    Serial.begin(9600);
};

void loop(){

    if(digitalRead(4) == 1){
        digitalWrite(3, 1);
        delay(100);
    }else{
        digitalWrite(3, 0);
        Serial.print("B");
        delay(100);
    };    
        
};

