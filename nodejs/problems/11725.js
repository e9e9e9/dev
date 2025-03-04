const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const edges = input.slice(1).map((str) => str.split(' ').map(Number));

const adjacentList = Array(n + 1)
  .fill()
  .map((val) => []);
const parentList = Array(n + 1)
  .fill()
  .map((val) => -1);
parentList[1] = 0;

for (const edge of edges) {
  const [a, b] = edge;
  adjacentList[a].push(b);
  adjacentList[b].push(a);
}

const setParent = (parent) => {
  for (const node of adjacentList[parent]) {
    // console.log('parent : ', parent, 'node : ', node);
    if (parentList[node] !== -1) {
      continue;
    } else {
      parentList[node] = parent;
    }
    setParent(node);
  }
};

// console.log(adjacentList);

setParent(1);

console.log(parentList.slice(2).join('\n'));
