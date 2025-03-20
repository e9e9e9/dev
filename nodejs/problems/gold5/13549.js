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
