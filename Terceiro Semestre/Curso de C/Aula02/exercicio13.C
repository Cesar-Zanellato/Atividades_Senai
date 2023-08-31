
// Level of difficulty
// Easy

// Objectives
// Familiarize the student with:

// Doing simple math with operators, variables and numbers
// Order of operations
// Printing on screen
// Scenario
// Complete the program in the editor. Compute the accrued amount of money with a starting value of 100 and an annual interest rate of 1.5%. Compute and print the results for the first three years.

// Your version of the program must print the same result as the expected output for each year. Compute each annual value on the basis of the previous year's value.

// Expected output
// After first year: 101.500000
// After second year: 103.022499
// After third year: 104.544998

#include <stdio.h>

int main()
{
	float startValue = 100;
	float interestRate = 0.015;
	float firstYearValue;
	float secondYearValue;
	float thirdYearValue;
	
	firstYearValue = startValue + (startValue * interestRate);
	secondYearValue = firstYearValue + (firstYearValue * interestRate);
	thirdYearValue = secondYearValue + (firstYearValue * interestRate);
	
	printf("After first year: %f\n", firstYearValue);
	printf("After second year: %f\n", secondYearValue);
	printf("After third year: %f\n", thirdYearValue);
	return 0;
}