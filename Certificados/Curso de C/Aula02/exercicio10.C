// Level of difficulty
// Easy

// Objectives
// Familiarize the student with:

// Fixing errors in a program
// Doing simple math with operators, variables and numbers
// Order of operations
// Use of parentheses to change the order of operations
// Printing on screen
// Scenario
// Check the program in the editor. Find all possible compilation errors and logic errors. Fix them, but do not change any numeric values.

// However, you may use parentheses (you can add or remove them). Your version of the program must print the same result as the expected output. Before you use your the, try to find the errors only by manual code analysis.

// Expected output
// the result is: 28
// the big result is: 59

#include <stdio.h>

int main()
{
	int xValue = 5;
	int yValue = 9;
	int result = (xValue + yValue) * 2;
	int bigResult = (xValue + yValue * 6);
	printf("the result is: %d\n", result);
	printf("the big result is: %d\n", bigResult);
	return 0;
}