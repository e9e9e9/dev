const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const ps = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
let partSum = 0;
for (const p of ps) {
  partSum += p;
  result += partSum;
}
console.log(result);
