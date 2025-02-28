// difficulty : s2
// learn : 아래를 배우고 어려움을 겪음
// 다이나믹 프로그래밍의 메모제이션을 솔루션을 발상하는 것
// 메모제이션의 정책을 수립하고 코드를 구현하는 것

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);
// idx => length
// value = > max num
const memo = Array(n + 1).fill(987654321);

memo[1] = nums[0];
for (let i = 1; i < n; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (nums[i] > memo[j] && j < n) {
      memo[j + 1] = Math.min(memo[j + 1], nums[i]);
    } else if (
      (j === 1 && nums[i] < memo[j]) ||
      (memo[j - 1] !== 987654321 &&
        memo[j] !== 987654321 &&
        nums[i] < memo[j] &&
        nums[i] > memo[j - 1])
    ) {
      memo[j] = nums[i];
    }
  }
}
let result = 1;
for (let i = 1; i < n + 1; i++) {
  if (memo[i] === 987654321) {
    break;
  }
  result = i;
}
console.log(result);
