// Level of difficulty
// Easy

// Objectives
// Familiarize the student with:

// Using operators,
// Building simple expressions,
// Translating verbal description into programming language
// Scenario
// Take a look at the code we've provided in the editor: it assigns two integer values, manipulates them and finally outputs the result and bigresult variables.

// The problem is that the manipulations have been described using natural language, so the code is completely useless now.

// We want you to act as an intelligent (naturally!) compiler and to translate the formula into a real "C" code notation.

// Test your code using the data we've provided.

// Expected output
// result: 38
// big result: 54872

	/* 
		increment xValue by 3
		decrement yValue by xValue
		multiply xValue times yValue giving result
		increment result by result
		decrement result by 1
		assign result modulo result to yValue
		increment result by result added to xValue
		assign result times result times result to bigResult
		increment result by xValue times yValue 
	*/

#include <stdio.h>

int main(void) 
{
	int xValue=5;
	int yValue=9;
	int result;
	int bigResult;
	
	xValue += 3;
	yValue -= xValue;
	result = xValue * yValue;
 	result += result;
 	--result;
 	yValue = result % result;
 	result += result + xValue;
 	bigResult = result * result * result;
 	result += xValue * yValue;
 	
    printf("xValue: %d\n", xValue);	
    printf("yValue: %d\n", yValue);	
	printf("result: %d\n", result);
	printf("big result: %d\n", bigResult);
	return 0;
}