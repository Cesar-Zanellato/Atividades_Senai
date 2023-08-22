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
// The value of ten is: 10.000000
// The value of twelve is: 12.000000


#include <stdio.h>

int main()
{
	float tenValue = 2 * 3 + 4;
	float twelveValue = (2 * 2.5) + (2 * 3.5) ;
	printf("The value of ten is: %f\n", tenValue);
	printf("The value of twelve is: %f\n", twelveValue);
	return 0;
}