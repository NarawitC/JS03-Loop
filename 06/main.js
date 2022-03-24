let result = '';
for (let i = 0; i <= 3; i++) {
  let sentence = '';
  for (let j = 0; j <= i; j++) {
    if (j !== i) {
      sentence += '* ';
    } else {
      sentence += '*';
    }
  }
  sentence = sentence + '\n';
  result += sentence;
}
console.log(result);
