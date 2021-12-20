/*
const myPromise = new Promise((resolve, reject) => {
  resolve(); // success
  reject(); // error
});
*/
///////////////////////////////
/* เขียนได้ 2 แบบ
function getA() {
  return "A";
}

const getA2 = () => {
  return "A2";
};
*/
//////////////////////////////

function heavyCalculate(a, b, callback) {
  setTimeout(function () {
    const result = a + b;
    callback(result);
  }, 1000);
}

const result = heavyCalculate(2, 4, function (result) {
  console.log(result);
});
