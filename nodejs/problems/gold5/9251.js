/*
'어떻게 다이나믹프로그래밍으로 풀 것인가?'를 코드로 적용하는 것이 어려웠다.
주어진 수열 중 긴 수욜과 짧은 수열의 활용.
'짧은 수열로 긴 수열에 접견했을 때 긴 수열의 각 요소가 갖는 LCS의 길이를 저장하려는 시도를 할 수 있는가?'
를 생각해내고 코드로 구현할 수 있는 능력이 있는가? 가 이 문제를 풀수 있는지 없는지를 가를 수 있는 기준이 되었다.
이러한 접근을 바로 해내지 못했다.
여러 고민의 과정을 거쳐서 문제를 풀 수 있었다.
인간의 뇌로 생각하는 과정을 어떻게 컴퓨터 기준으로 문제를 풀 수 있으며, 이것을 프로그래밍할 수 있는가...
내게는 아직도 익숙하지 않고 어려운 과정이다.
*/

let [first, second] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

if (first.length < second.length) {
  [first, second] = [second, first];
}
// 긴 수열의 index까지의 LCS 길이
let memo = Array(1001).fill(0);

for (let i = 0; i < second.length; i++) {
  const secondChar = second[i];
  let prevLeng = 0;
  const updatedMemo = [...memo];
  for (let j = 0; j < first.length; j++) {
    if (first[j] === secondChar) {
      if (j > 0) {
        updatedMemo[j] = prevLeng + 1;
      } else {
        updatedMemo[j] = 1;
      }
    }
    prevLeng = Math.max(prevLeng, memo[j]);
  }
  memo = [...updatedMemo];
}
// console.log(memo.slice(0, 20));
console.log(Math.max(...memo));
