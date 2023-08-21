int aa = 0, bb = 1, cc = 2, dd = 3, ee = 4, ff = 5, gg = 6, pp = 7, tempo = 750;
int contador = 0;

void setup()
{
  pinMode(aa, OUTPUT);
  pinMode(bb, OUTPUT);
  pinMode(cc, OUTPUT);
  pinMode(dd, OUTPUT);
  pinMode(ee, OUTPUT);
  pinMode(ff, OUTPUT);
  pinMode(gg, OUTPUT);
  pinMode(pp, OUTPUT);
}

void loop()
{
    contador = (contador + 1);
    if(contador == 0)
    {
        zero();
    }
    if(contador == 1)
    {
        um();
    }
    if(contador == 2)
    {
        dois();
    }
    if(contador == 3)
    {
        tres();
    }
    if(contador == 4)
    {
        quatro();
    }
    if(contador == 5)
    {
        cinco();
    }
    if(contador == 6)
    {
        seis();
    }
    if(contador == 7)
    {
        sete();
    }
    if(contador == 8)
    {
        oito();
    }
    if(contador == 9)
    {
        nove();
    }
  
  	delay(tempo);
}

void um()
{
    digitalWrite(aa,0);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,0);
    digitalWrite(ee,0);
    digitalWrite(ff,0);
    digitalWrite(gg,0);
  	digitalWrite(pp,0);
}

void dois()
{
    digitalWrite(aa,1);
    digitalWrite(bb,1);
    digitalWrite(cc,0);
    digitalWrite(dd,1);
    digitalWrite(ee,1);
    digitalWrite(ff,0);
    digitalWrite(gg,1);
}

void tres()
{
    digitalWrite(aa,1);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,0);
    digitalWrite(ff,0);
    digitalWrite(gg,1);
}

void quatro()
{
    digitalWrite(aa,0);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,0);
    digitalWrite(ee,0);
    digitalWrite(ff,1);
    digitalWrite(gg,1);
}

void cinco()
{
    digitalWrite(aa,1);
    digitalWrite(bb,0);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,0);
    digitalWrite(ff,1);
    digitalWrite(gg,1);
}

void seis()
{
    digitalWrite(aa,1);
    digitalWrite(bb,0);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,1);
    digitalWrite(ff,1);
    digitalWrite(gg,1);
}

void sete()
{
    digitalWrite(aa,1);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,0);
    digitalWrite(ee,0);
    digitalWrite(ff,0);
    digitalWrite(gg,0);
}

void oito()
{
    digitalWrite(aa,1);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,1);
    digitalWrite(ff,1);
    digitalWrite(gg,1);
}

void nove()
{
    digitalWrite(aa,1);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,0);
    digitalWrite(ff,1);
    digitalWrite(gg,1);
}

void zero()
{
    digitalWrite(aa,1);
    digitalWrite(bb,1);
    digitalWrite(cc,1);
    digitalWrite(dd,1);
    digitalWrite(ee,1);
    digitalWrite(ff,1);
    digitalWrite(gg,0);
}

void ponto()
{
    digitalWrite(aa,0);
    digitalWrite(bb,0);
    digitalWrite(cc,0);
    digitalWrite(dd,0);
    digitalWrite(ee,0);
    digitalWrite(ff,0);
    digitalWrite(gg,0);
    digitalWrite(pp,1);
}