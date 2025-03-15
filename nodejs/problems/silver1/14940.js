// lesson
// 까다로운 bfs...
// 경계조건과 업데이트 방식과 시점을 확인하는 문제였음
// 구현 과정 중 실수가 많이 나옴
// 문제에서 주어진 조건인 '들어갈 수 없는 영역은 0으로 표시'에 대해 단편적으로 인식하여 일부 테스트 케이스에 대해 통과하지 못하는 경험을 함
// 문제의 주어진 조건을 꼼꼼히 살피고 구현하는 습관 필요
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
  .map((val) => Array(m).fill());

const updateResult = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums[i][j] === 0) {
        result[i][j] = 0;
      } else {
        result[i][j] = -1;
      }
    }
  }
};
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

updateResult();
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
    result[updatedX][updatedY] = dist + 1;
    q.push([updatedX, updatedY, dist + 1]);
  }
  idx++;
}

console.log(result.map((arr) => arr.join(' ')).join('\n'));
