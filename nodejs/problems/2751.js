const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const nums = input.slice(1).map(Number);
nums.sort((a, b) => a - b);
console.log(nums.join('\n'));
