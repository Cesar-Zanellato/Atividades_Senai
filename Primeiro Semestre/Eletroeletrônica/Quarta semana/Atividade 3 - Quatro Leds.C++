// C++ code
//
int tempo = 750;

void setup()
{
  pinMode(0, OUTPUT);
  pinMode(1, OUTPUT);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
}

void loop()
{
  digitalWrite(3, HIGH);
  delay(tempo);
  digitalWrite(2, HIGH);
  delay(tempo);
  digitalWrite(1, HIGH);
  delay(tempo);
  digitalWrite(0, HIGH);
  delay(tempo);
 
  digitalWrite(3, LOW);
  delay(tempo);
  digitalWrite(2, LOW);
  delay(tempo);
  digitalWrite(1, LOW);
  delay(tempo);
  digitalWrite(0, LOW);
  delay(tempo);
}