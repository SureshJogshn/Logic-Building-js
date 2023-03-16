//Create a function that takes two numbers as arguments and returns their sum.
// Test Passed: Value == 5
// Test Passed: Value == -9
// Test Passed: Value == 10
// Test Passed: Value == 90

// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

let a, b;

function addition(a,b)
{
  return a+b;
}

const Test1 = addition(3,2);
console.log("Test Passed: " + Test1 )
const Test2 = addition(-3,-6);
console.log("Test Passed: " + Test2 )
const Test3 = addition(7,3);
console.log("Test Passed: " + Test3 )
const Test4 = addition(40,50);
console.log("Test Passed: " + Test4 )
