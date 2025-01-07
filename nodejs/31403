const fs = require('fs');
const rawInput =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync(__dirname + '/input.txt');
const inputData = rawInput.toString().trim().split('\n');

const [a, b, c] = inputData;
const result1 = parseInt(a, 10) + parseInt(b, 10) - parseInt(c, 10);
const result2 = a + b - c;

console.log(result1);
console.log(result2);
