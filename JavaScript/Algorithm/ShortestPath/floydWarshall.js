// 모든 노드에서 다른 모든 노드까지의 최단 경로 계산
// 2차원 배열로 최단 거리 정보 저장
// a -> b로 가는 거리와 a -> k -> b 로 가는 최소거리를 업데이트

const nodeCnt = 6;
const INF = Math.pow(10, 9);
const graph = Array.from(Array(nodeCnt + 1), () => Array(nodeCnt + 1).fill(INF));

for (let i = 0; i < nodeCnt + 1; i++) {
  graph[i][i] = 0;
}

// from, to, cost
const edges = [
  [1, 5, 3],
  [1, 2, 7],
  [1, 4, 2],
  [2, 6, 2],
  [2, 3, 6],
  [3, 5, 2],
  [3, 1, 8],
  [3, 4, 5],
  [4, 5, 4],
  [4, 2, 3],
  [4, 6, 1],
  [5, 1, 2],
  [5, 6, 2],
  [5, 4, 9],
  [6, 4, 1],
  [6, 5, 1],
  [6, 2, 9]
]

for (const edge of edges) {
  const [from, to, cost] = edge;
  graph[from][to] = cost;
}

console.log(graph);

// k는 거처가는 노드
for (let k = 1; k <= nodeCnt; k++) {
  for (let from = 1; from <= nodeCnt; from++) {
    for (let to = 1; to <= nodeCnt; to++) {
      graph[from][to] = Math.min(graph[from][to], graph[from][k] + graph[k][to]);
    }
  }
}

console.log(graph);