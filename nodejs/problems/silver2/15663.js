// learn
// 시간 최소화 : array의 deep copy 수행으로 발생하는 시간 소모 제거
// 시간 최소화 : array를 string화 해서 set의 key로 이용하는 메모제이션
// 시간 최소화 : visit을 prev 기준으로 최적화
// 참고 - dfs로 매우 빠르게 푸는 방법이 있음...https://www.acmicpc.net/source/91090650

const { resourceLimits } = require('worker_threads');

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
const result = [];
const visitedSet = new Set();

const solve = (prev, visited) => {
  // console.log(prev, visited);
  if (prev.length === m) {
    if (!visitedSet.has(prev.join('_'))) {
      result.push([...prev]);
    }
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    const nextPrev = [...prev, nums[i]];
    const visitedKey = nextPrev.join('_');
    if (visitedSet.has(visitedKey) || visited.includes(i)) {
      continue;
    } else {
      solve(nextPrev, [...visited, i]);
      visitedSet.add(visitedKey);
    }
  }
};

solve([], []);
result.map((_) => _.join(' ')).forEach((val) => console.log(val));
