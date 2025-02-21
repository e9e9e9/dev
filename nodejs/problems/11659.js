const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const sections = input.slice(2);
const sectionSum = [0];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  sectionSum.push(sectionSum[i] + num);
}

for (const sectionStr of sections) {
  const [start, end] = sectionStr.split(' ').map(Number);
  console.log(sectionSum[end] - sectionSum[start - 1]);
}
