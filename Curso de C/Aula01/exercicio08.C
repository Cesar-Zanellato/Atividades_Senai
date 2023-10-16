/*
Level of difficulty
Easy

Objectives
Familiarize the student with:

Fixing errors in a program
Variable names
Integer numbers
Printing on screen
Scenario
Check the program in the editor. Find all possible compilation errors and logic errors. Fix them.

Your version of the program must print the same result as the expected output. Before you use the compiler, try to find the errors only by manual code analysis.

If you want to improve the variable names, then do so, but remember that variable names have to be as descriptive as possible, and also as short as possible.

Expected output
Localhost IP is 127.0.0.1
*/
#include <stdio.h>

int main()
{
	int ipPart1 = 027;
	int ipPart2 = 0;
	int ipPart3 = 0;
	int ipPart4 = 1;

	printf("Localhost IP is %d.%d.%d.%d\n", ipPart1, ipPart2, ipPart3, ipPart4);
}