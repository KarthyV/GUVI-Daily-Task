// task 1

// 1) Print odd numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const toFindOdd = function (arr) {
  let odd = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
};

console.log(toFindOdd(arr));

// 2) Convert all the strings to title caps in a string array

let str = "karthi";

const toCap = function (str) {
  return str.toUpperCase();
};

console.log(toCap(str));

// 3) Sum of all numbers in an array

const toSum = function (num) {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(toSum(arr)); // input variable taken from Question 1

// 4) Return all the prime numbers in an array

const toCheckPrime = function (arr) {
  let prime = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] / 2 == 1 || (arr[i] % 2 !== 0 && arr[i] > 2)) {
      prime.push(arr[i]);
    }
  }
  return prime;
};

console.log(toCheckPrime(arr)); // input variable taken from Question

// 5) Return all the palindromes in an array

let num = [2, 2, 0, 2, 2, 0, 2, 2];

const toCheckPalindrome = function (num) {
  let reversed = num.reverse();
  if (reversed === num) {
    return num;
  }
};

console.log(toCheckPalindrome(num));

// 6) Return median of two sorted arrays of the same size

let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

const toCheckMedian = function (num1, num2) {
  num1 = num1.sort();
  num2 = num2.sort();
  let medianFor = Math.round(num1.length / 2);
  let median1 = num1[medianFor];
  let median2 = num2[medianFor];
  return [median1, median2];
};

console.log(toCheckMedian(num1, num2));

// 7) Remove duplicates from an array

let arr7 = [1, 1, 2, 2, 3];

const toRemoveDup = function (num) {
  return [...new Set(num)];
};

console.log(toRemoveDup(arr7));

// 8) Rotate an array by k times

const toRotate = function (arr, k) {
  for (i = 0; i < k; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  return arr;
};

let arr = [1, 2, 3, 4];
let k = 2;

console.log(toRotate(arr, k));
