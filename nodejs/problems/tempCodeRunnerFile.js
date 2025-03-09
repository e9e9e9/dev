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

const isDoneStartWith = Array(10000 + 1).fill(false);

const result = [];
const solve = (prev, target, checkedIdxs) => {
  //   console.log(prev, target, checkedIdxs);
  if (isDoneStartWith[Number(prev[0])]) {
    return;
  }
  if (checkedIdxs.length > m) {
    return;
  }
  if (prev.length === m) {
    result.push(prev);
    return;
  }
  const updatedCheckedIdx = [...checkedIdxs, target];
  const updatedPrev = prev + nums[target];
  for (let i = 0; i < nums.length; i++) {
    if (!updatedCheckedIdx.includes(i)) {
      solve(updatedPrev, i, updatedCheckedIdx);
      solve(prev, i, updatedCheckedIdx);
    }
  }
  if (updatedPrev.length === m && !result.includes(updatedPrev)) {
    result.push(updatedPrev);
    return;
  }
};

for (let i = 0; i < nums.length; i++) {
  solve('', i, []);
  isDoneStartWith[nums[i]] = true;
}

const updatedResult = [...new Set(result)];
updatedResult.sort((a, b) => Number(a) - Number(b));

console.log(updatedResult.map((str) => str.split('').join(' ')).join('\n'));
