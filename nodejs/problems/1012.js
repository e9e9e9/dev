const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const t = Number(input[0]);
let testInputIdx = 1;
const directions = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

for (let i = 0; i < t; i++) {
  const [m, n, k] = input[testInputIdx].split(' ').map(Number);
  const cabbages = Array(n)
    .fill()
    .map((_) => Array(m).fill(0));
  const yxs = input
    .slice(testInputIdx + 1, testInputIdx + 1 + k)
    .map((str) => str.split(' ').map(Number));
  let result = 0;
  for (const yx of yxs) {
    const [y, x] = yx;
    cabbages[x][y] = 1;
  }
  for (const yx of yxs) {
    const [y, x] = yx;
    if (cabbages[x][y] === 1) {
      result++;
      cabbages[x][y] = 2;
      const q = [yx];
      let point = 0;

      while (point < q.length) {
        for (const direction of directions) {
          const [pointY, pointX] = q[point];
          const [candidateX, candidateY] = [
            pointX + direction[0],
            pointY + direction[1],
          ];
          if (
            candidateX >= 0 &&
            candidateX < n &&
            candidateY >= 0 &&
            candidateY < m &&
            cabbages[candidateX][candidateY] === 1
          ) {
            q.push([candidateY, candidateX]);
            cabbages[candidateX][candidateY] = 2;
          }
        }
        point++;
      }
    }
  }
  //   console.log(cabbages);
  console.log(result);
  testInputIdx += k + 1;
}
