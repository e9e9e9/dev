/*
접근 1.
greedy, dynamic programming
1. 가성비가 가장 좋은 순서대로 정렬한다.
2. 정렬된 순서로 순회하며 자신이 포함되었을 때 최대 가치를 구한다.
3. 최대 가치는 정렬된 아이템 배열의 순서대로 K가 허용된다면 넣는 것으로 한다.
=> 다른 예외 케이스 발견

접근 2.
K 이하의 무게에 대해 최대 가치를 memozation하는 것이 맞을까?
1. 무게 순서로 정렬
2. 무게합의 최대 value로 memo

접근 3.
K 이하의 무게에 대해 최대 가치를 memozation
가치값이 updated되야하는 조건을 명확히 함.
    1. 내 아이템의 가치가 기존 무게의 가치보다 높다면 업데이트
    2. 이미 업데이트된(가치에 대해 연산된) 무게 + 현 아이템의 무게가 K 이하라면 (연산된 무게 + 현 아이템 무게)의 가치 or 기존 무게의 가치 + 현 아이템의 가치 중 큰 값으로 업데이트 함

Lesson
- 다이나믹 프로그래밍의 방식을 여러 방식의 접근과 실패를 반복하며 옳은 방식을 찾을 수 있었음
- 내가 추가하는 아이템에 대해 중복연산되지 않도록 코딩 작업이 필요했음
- 더 간결하고 시간 복잡도가 낮은 방식이 있지만 '내가 아직 이런 접근은 할 수 없다'는 것을 코드를 보는 순간 알 수 있었음
https://www.acmicpc.net/source/91551173
*/

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, k] = input[0].split(' ').map(Number);
let memo = Array(k + 1).fill(0);
const items = input.slice(1).map((str) => str.split(' ').map(Number));

for (let i = 0; i < items.length; i++) {
  const [weight, value] = items[i];
  let updatedMemo = [...memo];
  if (value > memo[weight]) {
    updatedMemo[weight] = value;
  }
  for (let j = 1; j < memo.length; j++) {
    if (memo[j] !== 0 && j + weight <= k) {
      updatedMemo[j + weight] = Math.max(memo[j + weight], memo[j] + value);
    }
  }
  [memo, updatedMemo] = [updatedMemo, memo];
}

console.log(Math.max(...memo));
// console.log(items);
// console.log(memo.slice(-10));
