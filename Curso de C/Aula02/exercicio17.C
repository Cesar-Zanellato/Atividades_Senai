/*
Level of difficulty
Easy

Objectives
Familiarize the student with:

Character types and values
Using character types practically
Printing on screen
Scenario
Write a small program which prints the differences between all ten digit characters (from '1' to '0') and zero ('0'). Print each one on a separate line. Your program must print the same result as the expected output.

Expected output
'1' - '0' is: 1
'2' - '0' is: 2
'3' - '0' is: 3
'4' - '0' is: 4
'5' - '0' is: 5
'6' - '0' is: 6
'7' - '0' is: 7
'8' - '0' is: 8
'9' - '0' is: 9
'0' - '0' is: 0
*/
#include <stdio.h>

int main()
{
	char zero = '0';
	char um = '1';
	char dois = '2';
	char tres = '3';
	char quatro = '4';
	char cinco = '5';
	char seis = '6';
	char sete = '7';
	char oito = '8';
	char nove = '9';

	printf("'%c' - '%c' is: %d\n", um, zero, 1);
	printf("'%c' - '%c' is: %d\n", dois, zero, 2);
	printf("'%c' - '%c' is: %d\n", tres, zero, 3);
	printf("'%c' - '%c' is: %d\n", quatro, zero, 4);
	printf("'%c' - '%c' is: %d\n", cinco, zero, 5);
	printf("'%c' - '%c' is: %d\n", seis, zero, 6);
	printf("'%c' - '%c' is: %d\n", sete, zero, 7);
	printf("'%c' - '%c' is: %d\n", oito, zero, 8);
	printf("'%c' - '%c' is: %d\n", nove, zero, 9);
	printf("'%c' - '%c' is: %d\n", um, zero, 0);

	return 0;
}