// task 2

/*  1)  Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number. 

*/

function addFive(number) {
  console.log(number + 5);
}

addFive(5);
addFive(0);
addFive(-5);

/* 2) Write a function called “getOpposite”.
  Given a number, return its opposite */

function getOpposite(num) {
  if (num === parseInt(num)) {
    console.log(Math.abs(num));
  } else console.log(-1);
}
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5);

// 3) Fill in your code that takes an number minutes and converts it to seconds.

function toSeconds(min) {
  console.log(min * 60);
}
toSeconds(5);
toSeconds(3);
toSeconds(2);

// 4) Create a function that takes a string and returns it as an integer.

function toInteger(mystr) {
  console.log(+mystr);
}
toInteger("6");
toInteger("1000");
toInteger("12");

// 5) Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function nextNumber(myint) {
  myint++;
  console.log(myint);
}

nextNumber(0);
nextNumber(9);
nextNumber(-3);
