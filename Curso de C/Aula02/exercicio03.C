// Level of difficulty
// Easy

// Objectives
// Familiarize the student with:

// Fixing errors in a program
// Floating-point numbers
// Printing on screen
// Scenario
// Check the program in the editor. Find all possible compilation errors and logic errors. Fix them.

// Your version of the program must print the same result as the expected output. Before you use the compiler, try to find the errors only by manual code analysis. Later, you can use the constant value of Pi.

// Expected output
// The value of half is: 0.500000
// The value of Pi is: 3.141593

#include <stdio.h>

int main()
{
	float halfValue = 0.5;
	float piValue = 3.14159265;
	printf("The value of half is: %f\n", halfValue);
	printf("The value of Pi is: %f\n", piValue);
	return 0;
}