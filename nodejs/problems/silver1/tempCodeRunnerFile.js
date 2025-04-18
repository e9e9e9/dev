const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input.slice(1).map((str) => str.split(' ').map(Number));
const result = Array(n)
  .fill()
  .map((val) => Array(m).fill(-1));
const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const getTargetPoint = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums[i][j] === 2) {
        return [i, j];
      }
    }
  }
};
const [targetX, targetY] = getTargetPoint();
const q = [[targetX, targetY, 0]];
result[targetX][targetY] = 0;

let idx = 0;

while (idx < q.length) {
  const [x, y, dist] = q[idx];
  for (const direction of directions) {
    const [dx, dy] = direction;
    const [updatedX, updatedY] = [x + dx, y + dy];
    if (updatedX < 0 || updatedY < 0 || updatedX > n - 1 || updatedY > m - 1) {
      continue;
    }
    if (result[updatedX][updatedY] !== -1) {
      continue;
    }
    if (nums[updatedX][updatedY] === 0) {
      result[updatedX][updatedY] = 0;
      continue;
    }
    result[updatedX][updatedY] = dist + 1;
    q.push([updatedX, updatedY, dist + 1]);
  }
  idx++;
}

console.log(result.map((arr) => arr.join(' ')).join('\n'));
