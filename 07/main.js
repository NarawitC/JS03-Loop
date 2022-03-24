let result = '';
for (let i = 2; i <= 12; i++) {
  let sentence = '';
  for (let j = 1; j <= 12; j++) {
    sentence = '';
    sentence += `${i} x ${j} = ${i * j}\n`;
    // console.log(sentence);
    result += sentence;
  }
}
console.log(result);
