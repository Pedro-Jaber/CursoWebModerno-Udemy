let num1 = 1;
let num2 = 2;

num1++; // num1 = num1 + 1
console.log(num1);
--num1; // maior precedência que num1--
console.log(num1);

console.log(++num1 === num2--); // true
/*
1) num1 + 1 = 2
2) num1 === num2? true
3) num2 - 1 = 1
*/
console.log(num1 === num2); // false
