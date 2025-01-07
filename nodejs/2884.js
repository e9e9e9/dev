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
const [h, m] = inputData;
let totalMin = h * 60 + m - 45;
if (totalMin < 0) {
  totalMin = 1440 + totalMin;
}
const modifiedHour = parseInt(totalMin / 60);
const modifiedMin = totalMin % 60;

console.log(`${modifiedHour} ${modifiedMin}`);
