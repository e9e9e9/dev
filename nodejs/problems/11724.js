// learn : adjacentList의 응용
// 까다롭다...
// 문제가 좋지 않다..
// 단일 노드를 connected component로 카운팅 한다는 내용
// node는 1~n의 값으로 존재한다는 내용이 있으면 좋았을 것 같다.

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const [n, m] = input[0].split(' ').map(Number);
const lines = input.slice(1).map((str) => str.split(' ').map(Number));

const visited = Array(n + 1)
  .fill()
  .map((_) => false);

const adjacentList = Array(n + 1)
  .fill()
  .map((_) => []);

let result = 0;
for (const line of lines) {
  const first = line[0];
  const second = line[1];
  adjacentList[first].push(second);
  adjacentList[second].push(first);
}

for (const line of lines) {
  const first = line[0];
  const second = line[1];

  if (visited[first] === false && visited[second] === false) {
    result++;
  }

  const q = [first];
  let front = 0;

  while (front < q.length) {
    if (visited[q[front]] !== true) {
      visited[q[front]] = true;
      q.push(...adjacentList[q[front]]);
    }
    front++;
  }
}

for (let i = 1; i <= n; i++) {
  if (visited[i] === false) {
    visited[i] = true;
    result++;
  }
}

console.log(result);
