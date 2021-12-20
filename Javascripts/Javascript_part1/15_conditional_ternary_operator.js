/* 

const smallBookPrice = isDiscount ? 100 : 200;

*/

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
const resulText = e > 10 ? "Lucky Number" : "Not Lucky Number";
