// lesson
// - 구간합의 활용
// - 시간복잡도 낮추기
// - 여러가지 케이스 생각하기
// 다양한 경우의 구간합을 구하고, 활용하여 시간 복잡도를 낮추는 코드를 작성하는게 핵심
// 지금까지 단일 구간합만 구현해보았지만 여러 구간합을 다양하게 활용하는 건 처음해봄
// 훨씬 쉽고 빠르고 깔끔하게 푸는 방법이 있으니 참고하자 - https://www.acmicpc.net/source/91395937
const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numberMap = input
  .slice(1, n + 1)
  .map((str) => str.split(' ').map(Number));
const sections = input.slice(n + 1).map((str) => str.split(' ').map(Number));

// 시간복잡도가 높은 풀이
// const resultArr = [];
// for (let i = 0; i < m; i++) {
//   const [x1, y1, x2, y2] = sections[i];
//   let result = 0;
//   for (let x = x1 - 1; x <= x2 - 1; x++) {
//     for (let y = y1 - 1; y <= y2 - 1; y++) {
//       result += numberMap[x][y];
//     }
//   }
//   resultArr.push(result);
// }

// console.log(resultArr.join('\n'));

const rangeSum = Array(n + 1)
  .fill()
  .map((_) => Array(n + 1));

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (i === 1 && j === 1) {
      rangeSum[1][1] = numberMap[0][0];
    } else if (i > 1 && j === 1) {
      rangeSum[i][j] = rangeSum[i - 1][n] + numberMap[i - 1][j - 1];
    } else {
      rangeSum[i][j] = rangeSum[i][j - 1] + numberMap[i - 1][j - 1];
    }
  }
}

const columnSum = Array(n + 1)
  .fill()
  .map((_) => Array(n + 1));

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (j === 1) {
      columnSum[i][j] = numberMap[i - 1][j - 1];
    } else {
      columnSum[i][j] = columnSum[i][j - 1] + numberMap[i - 1][j - 1];
    }
  }
}

// console.log(rangeSum);

const resultArr = [];
for (let i = 0; i < m; i++) {
  const [x1, y1, x2, y2] = sections[i];
  let result = 0;
  result = rangeSum[x2][y2] - rangeSum[x1][y1] + numberMap[x1 - 1][y1 - 1];
  if (y1 > 1) {
    for (let j = x1 + 1; j <= x2; j++) {
      result -= columnSum[j][y1 - 1];
    }
  }
  if (y2 < n) {
    for (let j = x1; j <= x2 - 1; j++) {
      result -= columnSum[j][n] - columnSum[j][y2];
    }
  }
  resultArr.push(result);
}

console.log(resultArr.join('\n'));
