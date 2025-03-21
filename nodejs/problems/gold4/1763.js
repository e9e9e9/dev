/* 
dijikstra의 응용
- dijikstra를 복습할 수 있어서 좋았다.
- 인접리스트가 아니라 인접테이블을 이용해 시간초과를 경험했다.
*/

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [v, e] = input[0].split(' ').map(Number);
const visitedList = Array(v + 1).fill(false);
const startPoint = Number(input[1]);
const edges = Array(v + 1)
  .fill()
  .map((val) => []);
const weights = Array(v + 1)
  .fill()
  .map((val) => Infinity);

for (const edge of input.slice(2).map((str) => str.split(' ').map(Number))) {
  const [u, v, w] = edge;
  edges[u].push([v, w]);
  if (u === startPoint) {
    weights[v] = w;
  }
}
weights[startPoint] = 0;

const getSamllestNodeAndWeight = () => {
  let idx = -1;
  let minValue = Infinity;
  for (let i = 1; i <= v; i++) {
    if (!visitedList[i] && weights[i] <= minValue) {
      minValue = weights[i];
      idx = i;
    }
  }
  return [idx, minValue];
};

while (true) {
  const [smallestNodeIdx, smallestNodeWeight] = getSamllestNodeAndWeight();
  //   console.log(smallestNodeIdx);
  if (smallestNodeIdx === -1) {
    break;
  }
  const samllestNodeEdges = edges[smallestNodeIdx];
  //   console.log(samllestNodeEdges);
  visitedList[smallestNodeIdx] = true;

  for (const edge of samllestNodeEdges) {
    const [to, weight] = edge;
    weights[to] = Math.min(smallestNodeWeight + weight, weights[to]);
  }
}

// console.log(edges);
// console.log(weights);
console.log(
  weights
    .slice(1)
    .map((num) => {
      if (num === Infinity) {
        return 'INF';
      }
      return num;
    })
    .join('\n')
);
