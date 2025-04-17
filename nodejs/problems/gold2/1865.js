/*
- 벨만 포를 공부하고 구현는 것에 의미가 있었음
- 시작점으로 돌아가는 값이 음수가 되는가?를 판단하기 위해서는 O(t * n * 2 * m * w) 시간이 필요하여 시간초과가 발생함
- 결국 각 웜홀마다 벨만포드를 수행 시 항상 시간초과가 발생하여 문제를 풀기 어려웠음
- 질문을 검색하던 중 중요한 힌트를 얻음 - '시작점으로 다시 돌아오는 것이 곧 싸이클이다'
    - https://www.acmicpc.net/board/view/148454
- 한 번만 수행하여 음수 싸이클이 있는지 확인이 필요했음
- GPT를 이용해 힌트를 얻었고 가상의 노드를 생성 후 모든 노드에 연결한 다음 그 노드에서 벨만포드 알고리즘을 수행하면 음수 싸이클이 존재하게 되는 확인할 수 있었음
- 즉 어떤 출발점에서 시간 여행해서 출발점으로 돌아오는 음수싸이클을 확인하여 문제를 해결
*/

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
let idx = 1;

for (let tc = 0; tc < t; tc++) {
  const [n, m, w] = input[idx++].split(' ').map(Number);
  const edges = [];

  // 양방향 도로
  for (let i = 0; i < m; i++) {
    const [s, e, t] = input[idx++].split(' ').map(Number);
    edges.push([s, e, t]);
    edges.push([e, s, t]);
  }

  // 단방향 웜홀
  for (let i = 0; i < w; i++) {
    const [s, e, t] = input[idx++].split(' ').map(Number);
    edges.push([s, e, -t]);
  }

  // 가상 노드 0에서 모든 노드로 거리 0 간선 추가
  for (let i = 1; i <= n; i++) {
    edges.push([0, i, 0]);
  }

  // 벨만-포드 수행
  const dist = Array(n + 1).fill(Infinity);
  dist[0] = 0;
  let hasCycle = false;

  for (let i = 0; i <= n; i++) {
    for (const [u, v, cost] of edges) {
      if (dist[u] !== Infinity && dist[v] > dist[u] + cost) {
        dist[v] = dist[u] + cost;
        if (i === n) hasCycle = true; // n번째에도 갱신되면 음수 사이클 존재
      }
    }
  }

  console.log(hasCycle ? 'YES' : 'NO');
}
