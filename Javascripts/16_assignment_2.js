// รับค่า num0 เป็นคู่ print EVEN คี่ print ODD
const num0 = 1000;
if (num0 % 2 === 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}

const num00 = "John Tik";
const isEven = num00 % 2 === 0;
const isOdd = num00 % 2 === 1;
if (isEven) {
  console.log("EVEN");
} else if (isOdd) {
  console.log("ODD");
} else {
  console.log("Unknown");
}
/* 
const isEven = num0 % 2 === 0
const isOdd = num0 % 2 ==== 1000
const isOdd = !isEven 

*/

// num1 num2 num3
const num1 = 23;
const num2 = 31;
const num3 = 99;

// code .....................
// num1 >= num2 >= num3 print num1
// num2 >= num1 >= num3 print num2
// num3 >= num1 >= num2 print num3
if (num1 >= num2 && num1 >= num3) {
  console.log("case 1");
  result = num1;
} else if (num2 >= num1 && num2 >= num3) {
  console.log("case 2");
  result = num2;
} else if (num3 >= num1 && num3 >= num2) {
  console.log("case 3");
  result = num3;
}
console.log(result);
