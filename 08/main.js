let result = 0;
let n = 0;
let go = false;
do {
  go = false;
  n = prompt('Enter number');
  if (n !== '' && n > 0 && n !== null) {
    go = true;
    n = Number(n);
    result += n;
  }
} while (go);

console.log(result);
