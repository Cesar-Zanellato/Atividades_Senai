
int tempo = 300;

void setup()
{
  pinMode(0, OUTPUT);
  pinMode(1, OUTPUT);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
}

void loop()
{
  digitalWrite(0, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(0, LOW);
  delay(tempo); // Wait for 1000 millisecond(s)

  digitalWrite(1, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(1, LOW);
  delay(tempo); // Wait for 1000 millisecond(s)

  digitalWrite(2, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(2, LOW);
  delay(tempo); // Wait for 1000 millisecond(s)

  digitalWrite(3, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(3, LOW);
  delay(tempo); // Wait for 1000 millisecond(s)

  digitalWrite(4, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(4, LOW);
  delay(tempo); // Wait for 1000 millisecond(s)

  digitalWrite(5, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(5, LOW);
  delay(tempo); // Wait for 1000 millisecond(s)

  digitalWrite(6, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(6, LOW);
  delay(tempo); // Wait for 1000 millisecond(s)

  digitalWrite(7, HIGH);
  delay(tempo); // Wait for 1000 millisecond(s)
  digitalWrite(7, LOW);
  delay(tempo); // Wait for 1000 millisecond(s)
}