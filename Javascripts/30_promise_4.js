function heavyCalculate(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

const result = heavyCalculate(5, 6);
console.log(result);

heavyCalculate(7, 8).then(function (response) {
  console.log(response);
});

// เขียนให้มันต่อไปเรื่อยๆ
heavyCalculate(9, 10).then(function (response) {
  heavyCalculate(response, 3).then(function (response2) {
    console.log(response2);
  });
});
