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
// The value of half is: 0.500000
// The value of Pi is: 3.141593

#include <stdio.h>

int main()
{
	float halfValue = 0.6 - 0.1;
	float piValue = 0.14159265 + 3;
	printf("The value of half is: %f\n", halfValue);
	printf("The value of Pi is: %f\n", piValue);
	return 0;
}