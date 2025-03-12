// lesson
// easy
const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const adjacentList = Array(n)
  .fill()
  .map((_) => []);
const tree = input.slice(1).map((str) => str.split(' '));

for (let i = 0; i < n; i++) {
  const nodeIdx = tree[i][0].charCodeAt(0) - 65;
  adjacentList[nodeIdx].push(nodeIdx);
  tree[i][1] != '.'
    ? adjacentList[nodeIdx].push(tree[i][1].charCodeAt(0) - 65)
    : adjacentList[nodeIdx].push(-1);
  tree[i][2] != '.'
    ? adjacentList[nodeIdx].push(tree[i][2].charCodeAt(0) - 65)
    : adjacentList[nodeIdx].push(-1);
}

// console.log(adjacentList);

const numToChar = (num) => String.fromCharCode(num + 65);

const preoder = (nodeIdx, result) => {
  result += numToChar(nodeIdx);
  if (adjacentList[nodeIdx][1] !== -1) {
    result = preoder(adjacentList[nodeIdx][1], result);
  }
  if (adjacentList[nodeIdx][2] !== -1) {
    result = preoder(adjacentList[nodeIdx][2], result);
  }
  return result;
};
const midorder = (nodeIdx, result) => {
  if (adjacentList[nodeIdx][1] !== -1) {
    result = midorder(adjacentList[nodeIdx][1], result);
  }
  result += numToChar(nodeIdx);
  if (adjacentList[nodeIdx][2] !== -1) {
    result = midorder(adjacentList[nodeIdx][2], result);
  }
  return result;
};
const postorder = (nodeIdx, result) => {
  if (adjacentList[nodeIdx][1] !== -1) {
    result = postorder(adjacentList[nodeIdx][1], result);
  }
  if (adjacentList[nodeIdx][2] !== -1) {
    result = postorder(adjacentList[nodeIdx][2], result);
  }
  result += numToChar(nodeIdx);
  return result;
};

console.log(preoder(0, ''));
console.log(midorder(0, ''));
console.log(postorder(0, ''));
