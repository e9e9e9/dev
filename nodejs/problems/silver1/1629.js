const [a, b, c] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

const solve = (exp) => {
  if (exp === 1n) return a % c;

  const half = solve(exp / 2n) % c;
  const result = (half * half) % c;

  return exp % 2n === 1n ? (result * a) % c : result;
};

console.log(solve(b).toString());
