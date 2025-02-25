const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

let result = -1;
for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      const candidate = nums[i] + nums[j] + nums[k];
      if (candidate === m) {
        console.log(m);
        return;
      }
      if (candidate < m) {
        result = Math.max(candidate, result);
      }
    }
  }
}
console.log(result);
