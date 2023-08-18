// C++ code
//
int tempo1 = 1000;
  
void setup()
{
  pinMode(0, OUTPUT);
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(0, HIGH);
  delay(tempo1); 
  digitalWrite(1, HIGH);
  
  
  digitalWrite(0, LOW);
  delay(tempo1); 
  digitalWrite(1, LOW);
  
}