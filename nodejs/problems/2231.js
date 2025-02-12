const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim();

for (let i = 1; i <= Number(input); i++) {
  const str = i.toString();
  let partSum = i;
  for (let j = 0; j < str.length; j++) {
    partSum += Number(str[j]);
  }
  if (partSum === Number(input)) {
    console.log(i);
    return;
  }
}
console.log(0);
