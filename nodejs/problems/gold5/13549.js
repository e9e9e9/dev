/*
어려 테스트케이스를 고려하여 동작을 만족시키는 과정이 가장 어렵다.
- 반복문 or 재귀를 중단해야하는 조건 설정
- 메모제이션을 할 대상 설정과 대상의 값 설정
- 메모를 사용하는 로직
- 10만과 100만을 코드상 오타내는 것들...

시간은 1시간 정도 걸려서 불만족스럽지만, 한 번에 문제를 풀 수 있어서 보람이 있었음
*/

const [start, target] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const q = [[start, 0, 0]];
const isChecked = Array(100001).fill(Infinity);
let result = -1;
let idx = 0;

while (true) {
  const [point, sec] = q[idx];
  //   console.log(q);
  idx++;
  if (point < 0 || point > 100000 || isChecked[point] !== Infinity) {
    continue;
  }
  let multiplePoint = point;
  while (0 <= multiplePoint && multiplePoint <= 100000) {
    isChecked[multiplePoint] = Math.min(isChecked[multiplePoint], sec);
    if (target === multiplePoint) {
      result = isChecked[multiplePoint];
      break;
    }
    q.push([multiplePoint + 1, sec + 1]);
    q.push([multiplePoint - 1, sec + 1]);
    if (multiplePoint === 0) {
      break;
    }
    multiplePoint *= 2;
  }
  if (result !== -1) {
    console.log(result);
    return;
  }
}
