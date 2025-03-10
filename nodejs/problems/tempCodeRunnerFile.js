const [a, b, c] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const baseMod = a % c;

const solve = (exp) => {
  if (exp === 0) return 1;
  if (exp === 1) return a % c;

  const half = solve(Math.floor(exp / 2)) % c;

  if (exp % 2 === 1) {
    return (((half * half) % c) * (a % c)) % c;
  } else {
    return (half * half) % c;
  }
};

console.log(solve(b));
