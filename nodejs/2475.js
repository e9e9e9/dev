const fs = require('fs');
const rawInput =
  process.platform === 'linux'
    ? fs.readFileSync(filePath)
    : fs.readFileSync(__dirname + '/input.txt');
const inputData = rawInput
  .toString()
  .trim()
  .split(' ')
  .map((val) => parseInt(val, 10));

const result = inputData.reduce((acc, curr) => acc + Math.pow(curr, 2), 0) % 10;
console.log(result);
