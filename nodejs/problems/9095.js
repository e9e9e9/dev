const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
const solve = (n) => {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (n === 3) {
    return 4;
  }
  return solve(n - 1) + solve(n - 2) + solve(n - 3);
};

for (const n of input.slice(1).map(Number)) {
  console.log(solve(n));
}
