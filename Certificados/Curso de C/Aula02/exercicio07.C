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
// The value of ten is: 10
// The value of twenty is: 20

#include <stdio.h>

int main()
{
	int tenValue = 3 * 8 % 14;
	int twentyValue = 2 * tenValue + 10 % 5;
	printf("The value of ten is: %d\n", tenValue);
	printf("The value of twenty is: %d\n", twentyValue);
	return 0;
}