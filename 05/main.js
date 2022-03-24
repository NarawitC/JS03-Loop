let startMoney = 100000;

for (let i = 1; i <= 10; i++) {
  let interest = ((2.5 * 10 ** 10) / 10 ** 10 / 100) * ((startMoney * 10 ** 10) / 10 ** 10);
  startMoney += interest;
}
// console.log(startMoney);
