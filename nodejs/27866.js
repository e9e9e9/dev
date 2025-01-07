const fs = require('fs');
const rawInput =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync(__dirname + '/input.txt');
const inputData = rawInput.toString().trim().split('\n');

const str = inputData[0];
const num = inputData[1];
console.log(str[num - 1]);
