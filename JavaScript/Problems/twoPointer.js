// O(N) 수행시간 동안 합이 M인 연속 수열 개수 찾기
// 합이 10인 부분 함수 찾기
const list = new Array(100)
  .fill(undefined)
  .map(() => Math.floor(Math.random() * 5 + 1));
console.log(list);

const targetNum = 10;
let result = 0;
let startIdx = 0;
let sumOfTowPoint = 0;

for (let endIdx = 0; endIdx < list.length; endIdx++) {
  sumOfTowPoint += list[endIdx];

  // start point 확인
  if (sumOfTowPoint > targetNum) {
    sumOfTowPoint -= list[startIdx];
    startIdx++;
  }

  // 조건 만족 확인
  if (sumOfTowPoint === targetNum) {
    console.log(
      `Sub set is ${list.slice(startIdx, endIdx + 1)}, startIdx is ${startIdx}`
    );
    sumOfTowPoint -= list[startIdx];
    startIdx++;
    result++;
  }
}

console.log(result);
