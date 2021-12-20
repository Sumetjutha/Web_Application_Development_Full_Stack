/*
const appVersion = require("./config/appVersion");

function greeting() {
  console.log("Hello", appVersion);
}

greeting();
*/

/// import มาจาก file appVersion
const { appVersion, license, owner } = require("./config/appVersion");

function greeting() {
  console.log("Hello", appVersion, license, owner);
}

greeting();
////////////////////////////////

const {
  calculateCircleArea,
  calculateSquareArea,
  getName,
} = require("./utils/calculateArea");

const a1 = calculateCircleArea(7);
const a2 = calculateSquareArea(10);
const n = getName();

console.log(a1, a2, n);
