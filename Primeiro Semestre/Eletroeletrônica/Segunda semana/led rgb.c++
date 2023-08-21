
int tempo = 300;
int vm = 0, az = 1, vd = 2;


void setup()
{
  pinMode(vm, OUTPUT);
  pinMode(az, OUTPUT);
  pinMode(vd, OUTPUT);
}

void loop()
{
  digitalWrite(vm, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(vm, LOW);  
  delay(tempo);// Wait for 1000 millisecond(s)
  
  digitalWrite(az, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(az, LOW);
  delay(tempo);// Wait for 1000 millisecond(s)
  
  digitalWrite(vd, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(vd, LOW);
  delay(tempo);// Wait for 1000 millisecond(s)
  
}