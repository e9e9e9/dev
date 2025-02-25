// learn : find-union의 변형
// todo

const parentArr = Array(1001)
  .fill()
  .map((_) => false);

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const [n, m] = input[0].split(' ').map(Number);
const lines = input
  .slice(1)
  .map((str) => str.split(' ').map(Number))
  .map((line) => (line[1] < line[0] ? [line[1], line[0]] : line));
const findParent = (a) => {
  if (parentArr[a] !== false) {
    if (parentArr[a] !== a) {
      parentArr[a] = findParent(parentArr[a]);
    }
  } else {
    parentArr[a] = a;
  }
  return parentArr[a];
};

const union = (a, b) => {
  const parentA = findParent(a);
  const parentB = findParent(b);
  if (parentA < parentB) {
    parentArr[b] = parentA;
  } else {
    parentArr[a] = parentB;
  }
};

if (m === 0) {
  console.log(n);
  return;
}

let result = 0;
const sortedLines = lines.sort((a, b) => a[0] - b[0]);
console.log(sortedLines);
for (const line of sortedLines) {
  union(line[0], line[1]);
}

for (let i = 1; i < parentArr.length; i++) {
  if (parentArr[i] !== false && parentArr[i] === i) {
    result++;
  }
}

console.log(result);
console.log(parentArr.slice(1, 6));
