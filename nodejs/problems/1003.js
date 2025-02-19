const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const memo = [
  [1, 0],
  [0, 1],
];
for (let i = 1; i < input.length; i++) {
  const target = input[i];
  if (target >= memo.length) {
    while (memo.length - 1 < target) {
      memo.push([
        memo[memo.length - 1][0] + memo[memo.length - 2][0],
        memo[memo.length - 1][1] + memo[memo.length - 2][1],
      ]);
    }
  }
  //   console.log(memo, target);
  console.log(memo[target][0] + ' ' + memo[target][1]);
}
