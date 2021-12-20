/* 

if (condition) {
    statement 1
} else {
    statement 2
}

switch (expression) {
    case 1:
        statement1
        break
    case 2:
        statement2
        break
    default:
        statement3
}

*/

const age1 = 45;

if (age1 > 50) {
  console.log("> 50");
} else {
  console.log("<= 50");
}

/////////////////////////////////////////////////////////

const age2 = 55;
var isAgeMoreThan50;
if (age2 > 50) {
  isAgeMoreThan50 = true;
  console.log("> 50");
} else {
  isAgeMoreThan50 = false;
  console.log("<= 50");
}

console.log("isAgeMoreThan50", isAgeMoreThan50);

/////////////////////////////////////////////////////

const age3 = 40;
var isAgeMoreThan50;
var isAgeMoreThan30;
if (age3 > 50) {
  // age > 50
  isAgeMoreThan50 = true;
  console.log("> 50");
} else if (age3 > 30) {
  // 30 < age < 50
  isAgeMoreThan30 = true;
  isAgeMoreThan50 = false;
  console.log("> 30");
} else {
  // age <= 30
  console.log("<= 30");
  console.log("<= 50");
  isAgeMoreThan30 = false;
  isAgeMoreThan50 = false;
}

console.log("isAgeMoreThan30", isAgeMoreThan30);
console.log("isAgeMoreThan50", isAgeMoreThan50);
