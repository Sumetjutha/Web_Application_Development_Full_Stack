/* 
function calculationCircleArea(radius) {
    return Math.PI * radius ** 2
}
*/

const a = 1;
const isEvenA = a % 2 === 0;
console.log(a, isEvenA);

const b = 3;
const isEvenB = b % 2 === 0;
console.log(b, isEvenB);

function checkEvenOrOdd(number) {
  const isEven = number % 2 === 0;
  if (isEven) {
    return "Even";
  } else {
    return "Odd";
  }
}

const aa = checkEvenOrOdd(a);
const bb = checkEvenOrOdd(b);

console.log("aa :>>", aa);
console.log("bb :>>", bb);
