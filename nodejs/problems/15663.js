// learn
// 시간 최소화 : array의 deep copy 수행으로 발생하는 시간 소모 제거
// 시간 최소화 : array를 string화 해서 set의 key로 이용하는 메모제이션

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

// console.log(nums);
const result = new Set();
const visitedSet = new Set();

const solve = (prev, visited) => {
  //   console.log('prev : ', prev, 'visited : ', visited);
  if (prev.length === m) {
    result.add(prev.join('_'));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visitedSet.has(visited + i)) {
      continue;
    }
    if (!visited.includes(i)) {
      visitedSet.add(visited + i);
      solve([...prev, nums[i]], visited + i);
      solve([...prev], visited + i);
    }
  }
};

solve([], '');

const compareFn = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      continue;
    }
    return a[i] - b[i];
  }
};

[...result]
  .map((str) => str.split('_').map(Number))
  .sort(compareFn)
  .map((_) => _.join(' '))
  .forEach((val) => console.log(val));
