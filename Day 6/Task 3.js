// 1) Fix the code to get the largest of three.

/*aa = (f,s,t) => {
 // let f,s,t; Since the values are already assigned in parameters we dont have to declare them again inside a function // remove this line
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3)*/

// 2) Fix the code to Sum of the digits present in the number

/*function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=+n[i] // While looping through we must change the data type to number for adding it to the sum variable
 }
 return sum;
}
let n = String(123).split("");  // We need to convert it to a string and then split for looping
console.log(add(n));*/

// 3) Fix the code to Sum of all numbers using IIFE function
/*
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
  let sum = 0;
  /* for (var i = 0; i <= arr.length; i++); { In this line, arr.length itself gives the total count so, 
     no need of <= and after the condition semicolon was not needed,
     it states the line of code is ended. but we need to continue the loop hence semicolon is not needed. */
/*for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
//   return sum;  // While using IIFE we should not use return statement
})(); */

// 4) Fix the code to gen Title caps.

/* var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 // for (var i = 0; i <= arro.length; i++) { In this line, arr.length itself gives the total count so, no need of <=
 for (var i=0;i<arro.length;i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
//ano(); we need to pass the array as argument in order to access the array inside the function
ano(arr); */

// 5) Fix the code to sum the number in that array

/* const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const sum = (a, b) =>
//  a + b;
const sum = num.reduce((sum, num) => sum + num); // Since we are using reduce method we dont have to declare the sum before,and in reduce method 1st parameter acts as accumulator and second is the current elememt
console.log(sum); */
