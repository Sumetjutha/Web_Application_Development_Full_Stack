/*

&& 
|| 
!

*/

const a = 50;
if (a > 10) {
  console.log("Lucky Number");
} else {
  console.log("Not Lucky Number");
}

const b = 61;
if (b > 10) {
  if (b % 2 === 0) {
    console.log("Lucky Number");
  } else {
    console.log("Not Lucky Number 1");
  }
} else {
  console.log("Not Lucky Number 2");
}

const c = 51;
const conditionA = c > 10;
const conditionB = c % 2 === 0;
console.log("ConditionA", conditionA);
console.log("ConditionB", conditionB);
console.log("conditionA && conditionB", conditionA && conditionB);
if (conditionA && conditionB) {
  console.log("Lucky Number");
} else {
  console.log("Not Lucky Number");
}

const d = 80;
const conditionC = d > 10;
const conditionD = d % 2 === 0;
console.log("ConditionC", conditionC);
console.log("ConditionD", conditionD);
console.log("conditionC || conditionD", conditionC && conditionD);
if (conditionC || conditionD) {
  console.log("Lucky Number");
} else {
  console.log("Not Lucky Number");
}

const e = 81;
const conditionE = e > 10;
const conditionF = e % 2 === 0;
console.log("ConditionE", conditionE);
console.log("ConditionF", conditionF);
console.log("!conditionE || conditionF", conditionE && conditionF);
if (!conditionE || conditionF) {
  console.log("Lucky Number");
} else {
  console.log("Not Lucky Number");
}
