const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const meetings = input.slice(1).map((str) => str.split(' ').map(Number));

// console.log(meetings);

// 아래와 같은 우선 순위로 정렬
// 1. 시작시간이 이른 미팅
// 2. 진행시간이 짧은 미팅

meetings.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - a[0] - (b[1] - b[0]);
  }
  return a[0] - b[0];
});

// console.log(meetings);

let startTime = -1;
let endTime = -1;
let result = 0;
for (const meeting of meetings) {
  // target을 endTime이 이른 미팅으로 교체
  if (meeting[1] < endTime) {
    // console.log(meeting);

    startTime = meeting[0];
    endTime = meeting[1];
  } else if (meeting[0] >= endTime) {
    // console.log(meeting);
    result++;
    startTime = meeting[0];
    endTime = meeting[1];
  }
}

console.log(result);
