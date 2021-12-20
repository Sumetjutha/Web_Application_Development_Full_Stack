// async await
function heavyCalculate(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

// รอ promise ให้มันทำงาน fullfill
async function main() {
  const result1 = await heavyCalculate(1, 2);
  console.log(result1);
}
main();
