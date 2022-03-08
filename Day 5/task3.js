// task 3

// 1) Print odd numbers in an array IIFE method

const odd = (function (arr) {
  let odd = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  console.log(odd);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 2) Convert all the strings to title caps in a string array IIFE method

const toCap = (function (str) {
  console.log(str.toUpperCase());
})("karthi");

// 3) Sum of all numbers in an array IIFE method

const toSum = (function (num) {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 4) Return all the prime numbers in an array IIFE method

const toCheckPrime = (function (arr) {
  let prime = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] / 2 == 1 || (arr[i] % 2 !== 0 && arr[i] > 2)) {
      prime.push(arr[i]);
    }
  }
  console.log(prime);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 5) Return all the palindromes in an array IIFE method

const toCheckPalindrome = (function (num) {
  let reversed = num.reverse();
  if (reversed === num) {
    console.log(num);
  }
})([2, 2, 0, 2, 2, 0, 2, 2]);
