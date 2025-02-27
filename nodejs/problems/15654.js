const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const solve = (target) => {
  if (target.length === m) {
    console.log(target.join(' '));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!target.includes(nums[i])) {
      solve([...target, nums[i]], i);
    }
  }
};

solve([], 0);
