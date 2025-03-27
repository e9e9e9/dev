/*
플로이드 워셜 알고리즘의 존재를 알고 있어서 쉽게 풀 수 있었다.
플로이드 워셜 알고리즘을 정확하게 기억하지 못해 이전 학습한 내용을 찾아봐야 했다.
from-to로 향하는 edge의 cost가 여러 개 나올 수 있다는 점과
최대값을 다시 0으로 바꿔줘야 한다는 문제의 요구사항을 맞추지 못해 1회 틀렸다.
*/

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
const buses = input.slice(2).map((str) => str.split(' ').map(Number));

const dist = Array(n + 1)
  .fill()
  .map((val) => Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

for (const bus of buses) {
  const [a, b, c] = bus;
  dist[a][b] = Math.min(dist[a][b], c);
}

for (let k = 1; k <= n; k++) {
  for (let from = 1; from <= n; from++) {
    for (let to = 1; to <= n; to++) {
      dist[from][to] = Math.min(dist[from][to], dist[from][k] + dist[k][to]);
    }
  }
}

dist
  .slice(1)
  .map((val) => val.slice(1))
  .forEach((val) => {
    console.log(
      val.map((value) => (value === Infinity ? '0' : value)).join(' ')
    );
  });
