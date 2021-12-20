// คือ การทื่ส่ง function นึงลงในอีก argument นึง
function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

let lastResult = 0;
function sumLastResult(result) {
  lastResult = lastResult + result;
}

function calAndLog(n1, n2, operator, finish) {
  const result = operator(n1, n2);
  console.log(result);
  finish(result);
}

calAndLog(4, 5, add, sumLastResult);
calAndLog(5, 6, mul, sumLastResult);

console.log(lastResult);
