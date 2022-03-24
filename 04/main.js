let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i ** 2;
  } else if (i % 3 === 0) {
    sum -= i ** 2;
  }
}

console.log(sum);
