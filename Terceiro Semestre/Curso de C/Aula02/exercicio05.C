// LAB

// Level of difficulty
// Easy

// Objectives
// Familiarize the student with:

// Fixing errors in a program
// Doing simple math with operators, variables and numbers
// Printing on screen
// Scenario
// Check the program in the editor. Find all possible compilation errors and logic errors. Fix them, but do not change any numeric values.

// Your version of the program must print the same result as the expected output. Before you use the compiler, try to find the errors only by manual code analysis.

// Expected output
// The value of four is: 4
// The value of five is: 5


#include <stdio.h>

int main()
{
	int fourValue = 2 + 2 * 1;
	int fiveValue = 2 + 3;
	printf("The value of four is: %d\n", fourValue);
	printf("The value of five is: %d\n", fiveValue);
	return 0;
}