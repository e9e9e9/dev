// lesson
// dfs, bfs는 가장 쉬운 알고리즘 중 하나이지만 실수를 많이하게 된다.
// 재귀를 해야한 dfs, 반복문을 써야하면 bfs를 쓰자.
// bfs는 가능하다면 사람의 머리로 이해하기 쉬우며, Maximum call stack 에러를 피할 수 있다.

// 시간초과가 발생하여 memozation을 활용하여 불필요한 반복 연산을 제거했다.

// bfs로 풀 수 없는 문제라고 착각하여 greedy로 풀려고 했지만 생각한 greedy 방식으로는 풀 수 없었다.

// 가장 쉬운 방식으로 코드를 잘 만들었다면 빠른 시간 내 풀 수 있는 문제였다.

let [start, target] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const memo = Array(100001).fill(undefined);
const q = [[start, 0]];
let idx = 0;
while (idx < q.length) {
  const [curr, moveCnt] = q[idx];
  if (curr < 0 || curr > 100000) {
    idx++;
    continue;
  }
  if (memo[curr]) {
    idx++;
    continue;
  }
  if (curr === target) {
    console.log(moveCnt);
    return;
  }
  memo[curr] = moveCnt;
  q.push([curr + 1, moveCnt + 1]);
  q.push([curr - 1, moveCnt + 1]);
  q.push([curr * 2, moveCnt + 1]);
  idx++;
}

// if (start > target) {
//   [start, target] = [target, start];
// }

// let curr = start;
// let result = 0;
// while (true) {
//   console.log(curr, result);
//   if (curr === target) {
//     break;
//   }
//   const candidate1 = Math.abs(target - curr);
//   const candidate2 = Math.abs(target - 2 * curr);
//   if (candidate1 < candidate2) {
//     if (target > curr) {
//       curr += 1;
//     } else {
//       curr -= 1;
//     }
//   } else {
//     curr *= 2;
//   }
//   result += 1;
// }

// console.log(result);
