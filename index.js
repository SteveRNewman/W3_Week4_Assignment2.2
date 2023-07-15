//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;
if (
  q1test % 3 == 0 ||
  q1test % 5 == 0 ||
  (q1test % 3 == 0 && q1test % 5 == 0)
) {
  console.log(`${q1test} is divisible by 3, 5 or both`);
} else {
  console.log(`${q1test} is not divisible by 3, 5 or both`);
}

//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

// Year is divisible by 4 but not by 100; year is divisible by 400

// let year = 1999; // not
// let year = 2000; // is
// let year = 1900; // not
let year = 2024; // not

//Add code here

if (year % 4 == 0 && year % 100 == 0 && year % 400 !== 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is NOT a leap year.`);
}
//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

//Add code here
for (let num = 1; num <= 100; num++) {
  if (num % 3 == 0 || num % 4 == 0) {
    console.log(num);
  }
}
