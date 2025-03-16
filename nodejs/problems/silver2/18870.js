// lesson
// 시간 초과를 넘지 않게 자료를 구성하여 코딩
// Object의 값을 조회하는 시간은 O(1)임을 학습하게 됨
// -> 해시테이블을 사용하는 것의 의미와 해시테이블을 사용 시 조회하는 시간은 O(1)이라는 것
const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);
const uniqueNums = [...new Set(nums)].sort((a, b) => a - b);
const uniqueObject = {};
const result = [];
for (let i = 0; i < uniqueNums.length; i++) {
  uniqueObject[uniqueNums[i]] = i;
}
nums.forEach((val) => {
  result.push(uniqueObject[val]);
});

console.log(result.join(' '));
