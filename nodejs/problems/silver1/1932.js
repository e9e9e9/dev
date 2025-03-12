// lesson
// dynamic programming
const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const n = Number(input[0]);
const triangle = input.slice(1).map((str) => str.split(' ').map(Number));
const sumTriangle = Array(n)
  .fill()
  .map((val, idx) => Array(idx + 1).fill(0));

// console.log(triangle);

let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < sumTriangle[i].length; j++) {
    const leftParent = i > 0 && j > 0 ? sumTriangle[i - 1][j - 1] : 0;
    const rightParent =
      i > 0 && j < sumTriangle[i].length - 1 ? sumTriangle[i - 1][j] : 0;
    sumTriangle[i][j] = Math.max(leftParent, rightParent) + triangle[i][j];
    result = Math.max(result, sumTriangle[i][j]);
  }
}
// console.log(sumTriangle);
console.log(result);
