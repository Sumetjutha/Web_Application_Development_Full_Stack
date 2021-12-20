// คือการที่เป็น method ของพวก array ที่ใส่ function เข่้าไปข้างในก็ได้
const number1 = [1, 2, 3, 4, 5, 6];

// .map
function multiplyBytwo(num) {
  return num * 2;
}
const nubberX2 = number1.map(multiplyBytwo);
console.log(nubberX2);

function getZero() {
  return 0;
}
const number0 = number1.map(getZero);
console.log(number0);
////////////////////////////////////////////////////////////////

// .filter
function isEven(num) {
  return num % 2 == 0;
}
const number1Even = number1.filter(isEven);
console.log(number1Even);

////////////////////////////////////////////////////////////////

// .find
const FirstEvenNumber = number1.find(isEven);
console.log(FirstEvenNumber);

/////////////////////////////////////////////

// .findIndex
const isEveryNumberIsEven = number1.findIndex(isEven);
console.log(isEveryNumberIsEven);

////////////////////////////////////////////////////////////////
// .some
const isEveryNumberIsEven_2 = number1.some(isEven);
console.log(isEveryNumberIsEven_2);

////////////////////////////////////////////////////////////////
// .every
const isEveryNumberIsEven_3 = number1.every(isEven);
console.log(isEveryNumberIsEven_3);
