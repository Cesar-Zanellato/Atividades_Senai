// C++ code
//
int tempo1 = 500;
int tempo2 = 1000;

void setup()
{
  pinMode(0, OUTPUT);
}

void loop()
{
  digitalWrite(0, HIGH);
  delay(tempo1);
  digitalWrite(0, LOW);
  delay(tempo2);
}