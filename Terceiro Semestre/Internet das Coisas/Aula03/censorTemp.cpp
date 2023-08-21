#include "DHT.h"
#define DHTPIN 14     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11   // DHT 11
DHT dht(DHTPIN, DHTTYPE);

// Mudar Modo M ou m, Mudar tempMax A ou a, Mudar histeresse H ou h
//Manual = 0 Automatico = 1
int modo = 1;

float tempMax = 25;
char recebido;
int histerese = 2;

void setup() {
  pinMode(25, OUTPUT);
  Serial.begin(9600);
  Serial.println(F("DHTxx test!"));
  dht.begin();
}

void loop() {
  delay(2000);
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  float hic = dht.computeHeatIndex(t, h, false);

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("°C "));
  Serial.print(F(" Heat index: "));
  Serial.print(hic);
  Serial.print(F("°C Temp.Max "));
  Serial.print(tempMax);

  if(modo == 1){
    Serial.println(" Modo Automático");
  }
  if(modo == 0){
    Serial.println(" Modo Manual");
  }

  if(modo == 1){
    if(t > tempMax){
        digitalWrite(25, 1);
    }
    if(t < tempMax - histerese){
        digitalWrite(25, 0);
    }
  }
  
  if(Serial.available()){
    recebido = Serial.read();

    if(recebido == 'A') {
        tempMax += 1;
    }
    if(recebido == 'a') {
        tempMax -= 1;
    }
    if(recebido == 'H') {
        histerese += 1;
    }
    if(recebido == 'h') {
        histerese -= 1;
    }
     if(recebido == 'M') {
        modo = 1;
    }
    if(recebido == 'm') {
        modo = 0;
    }

    if(modo == 0){
        if(recebido == 'B') {
          digitalWrite(25, 1);
        }
        if(recebido == 'b') {
          digitalWrite(25, 0);
        }
    }

    Serial.println(recebido);
  }
}