#define bt 7
#define aa 8 
#define bb 9
#define cc 2
#define dd 3
#define ee 4
#define ff 5
#define gg 6
int n = 1;


void setup(){

    pinMode(bt, INPUT_PULLUP);
    Serial.begin(9600);
    
    pinMode(aa, OUTPUT);
    pinMode(bb, OUTPUT);
    pinMode(cc, OUTPUT);
    pinMode(dd, OUTPUT);
    pinMode(ee, OUTPUT);
    pinMode(ff, OUTPUT);
    pinMode(gg, OUTPUT);
}

void loop(){

    if(digitalRead(bt) == 0){

        n++;

        if(n > 6){ 
            
            n=1;
        }
        Serial.print(n);
        Serial.print("\n");
    }

    if(n == 1){
        um();
    }

    if(n == 2){
        dois();
    }

    if(n == 3){
        tres();
    }

    if(n == 4){
        quatro();
    }

    if(n == 5){
        cinco();
   
    }
    if(n == 6){
        seis();

    }
 }   
void um(){
    digitalWrite(aa,0);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,0);
    digitalWrite(ee,0);
    digitalWrite(ff,0);
    digitalWrite(gg,0);
}

void dois(){
    digitalWrite(aa,1);
    digitalWrite(bb,1);
    digitalWrite(cc,0);
    digitalWrite(dd,1);
    digitalWrite(ee,1);
    digitalWrite(ff,0);
    digitalWrite(gg,1);
}

void tres(){
    digitalWrite(aa,1);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,0);
    digitalWrite(ff,0);
    digitalWrite(gg,1);
}

void quatro(){
    digitalWrite(aa,0);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,0);
    digitalWrite(ee,0);
    digitalWrite(ff,1);
    digitalWrite(gg,1);
}

void cinco(){
    digitalWrite(aa,1);
    digitalWrite(bb,0);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,0);
    digitalWrite(ff,1);
    digitalWrite(gg,1);
}

void seis(){
    digitalWrite(aa,1);
    digitalWrite(bb,0);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,1);
    digitalWrite(ff,1);
    digitalWrite(gg,1);
}