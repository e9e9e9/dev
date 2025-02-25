// learn : 이분탐색의 응용
const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);
const solve = (start, end, result) => {
  if (start > end) {
    return end;
  }
  if (end < start) {
    return start;
  }
  const mid = Math.floor((end + start) / 2);
  //   console.log(start, end);
  //   console.log('mid : ', mid);
  const collectedTrees = trees.reduce(
    (prev, curr) => prev + Math.max(curr - mid, 0),
    0
  );

  if (collectedTrees === result) {
    return mid;
  }
  if (collectedTrees > result) {
    return solve(mid + 1, end, result);
  }
  if (collectedTrees < result) {
    return solve(start, mid - 1, result);
  }
};

const result = solve(0, 2000000000, m);
console.log(result);
