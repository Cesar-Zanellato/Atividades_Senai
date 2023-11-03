/*
Vamos supor que existam as seguintes declarações:

int Signed = -8, VarS;
unsigned Unsigned = 6, VarU;

Dê uma olhada nessas mudanças, elas são mostradas no editor.

Ambos os operadores podem ser usados na forma de atalho como abaixo:

Signed >>= 1;  division by 2 
Unsigned <<= 1;  multiplication by 2 


E aqui está a tabela de prioridade atualizada, contendo todos os operadores introduzidos nesta seção.

!, (tipo), , , , ~++--+-	Unário
*, , /%	
+, -	                    binário
<<, >>	
<, , , <=>>=	
==, !=	
&	
|	
&&	
||,	
=, , , , , , , , , , +=-=*=/=%=&=^=|>>=<<=
*/


// equivalente à divisão por 2 –> VarS == -4
VarS = Signed >> 1;

// equivalente à multiplicação por 4 –> VarS == -32
VarS = Signed << 2;

// equivalente à divisão por 4 –> VarU == 1
VarU = Unsigned >> 2;

// equivalente à multiplicação por 2 –> VarU == 12
VarU = Unsigned << 1;