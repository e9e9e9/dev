const fs = require('fs');
const rawInput =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync(__dirname + '/input.txt');
const inputData = rawInput
  .toString()
  .trim()
  .split(' ')
  .map((val) => parseInt(val, 10));
