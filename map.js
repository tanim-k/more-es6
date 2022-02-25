const numbers = [4,6,8,10];
// const output = [];
// shortcut 
const doubleIt = number => number * 2;
// for (const number of numbers) {
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output);

// function 
// function doubleOld (number) {
//     return number * 2;
// }

// use of map 
const outputMap = numbers.map(doubleIt);
const outputMap1 = numbers.map(number => number*2);
const outputMap2 = numbers.map(x => x*2);
console.log(outputMap);
console.log(outputMap1);
console.log(outputMap2);
const squares = numbers.map(x => x*x);
console.log(squares);
