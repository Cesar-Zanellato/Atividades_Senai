// Level of difficulty
// Easy

// Objectives
// Familiarize the student with:

// Fixing errors in a program
// Floating point numbers
// Printing on screen
// Scenario
// Check the program in the editor. Find all possible compilation errors and logic errors. Fix them.

// Your version of the program must print the same result as the expected output. Once you have fixed the errors, remove all the unnecessary characters from the code. Check which characters may be left without triggering an error.

// Before you use the compiler, try to find the errors only by manual code analysis.

// Expected output
// The value of nine is: 9.000000
// The value of ten is: 10.000000

#include <stdio.h>

int main()
{
	float tenValue = 10.000000;
	printf("The value of ten is: %f\n", 9.000);
	printf("The value of nine is: %f\n", tenValue);
	return 0;
}