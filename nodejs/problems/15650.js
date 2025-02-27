const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [n, m] = input;

const solve = (target, idx) => {
  if (target.length + n - idx < m) {
    return;
  }
  if (target.length === m) {
    console.log(target.join(' '));
    return;
  }
  const newTarget = [...target, idx + 1];
  solve(newTarget, idx + 1);
  solve(target, idx + 1);
};

solve([], 0);
