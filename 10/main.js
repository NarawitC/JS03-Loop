for (let i = 1; i <= 100; i++) {
  let primeNumber = true;
  for (let j = 2; j < i; j++)
    if (i % j === 0) {
      primeNumber = false;
      // console.log(primeNumber);
    }
  // console.log(primeNumber);
  if (primeNumber === true) {
    console.log(i);
  }
}
