/*
성능 향상된 dijkstra의 구현과 활용을 연습할 수 있었다.
heap을 몇 번 구현해봤지만 새로 구현하면 언제나 실수가 발생했다.
특히 pop을 구현할 때 조건이 헷갈리고 오타가 많이 난다.

플로이드-워셜로 문제 해결을 시도했지만 n^3의 시간복잡도에 의해 시간초과가 발생했다.
heap을 이용한 dijkstra를 써야한다는 것은 질문게시판을 통해 알 수 있었다.

costTable을 한 번만 초기화하고 사용하면 된다는 것이 직관적으로 이해되지 않아 몇 번의 시간초과를 경험하였다.
*/

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m, x] = input[0].split(' ').map(Number);

const adjacentNodeList = Array(n + 1)
  .fill()
  .map((val) => []);
for (const road of input.slice(1)) {
  const [start, end, cost] = road.split(' ').map(Number);
  adjacentNodeList[start].push([end, cost]);
}

// console.log(costTable);
// console.log(sortedRoads);

class priorityQueue {
  constructor() {
    this.pq = [];
  }
  push(element) {
    this.pq.push(element);
    let idx = this.pq.length - 1;
    while (idx > 0) {
      const parentIdx = parseInt((idx - 1) / 2);
      if (parentIdx >= 0 && this.pq[idx][1] < this.pq[parentIdx][1]) {
        [this.pq[idx], this.pq[parentIdx]] = [this.pq[parentIdx], this.pq[idx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  pop() {
    if (this.pq.length <= 0) {
      return undefined;
    }
    const result = [...this.pq[0]];
    const lastIdx = this.pq.length - 1;
    [this.pq[0], this.pq[lastIdx]] = [this.pq[lastIdx], this.pq[0]];
    this.pq.pop();
    let idx = 0;
    while (2 * idx + 1 < this.pq.length) {
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      let smallestIdx = idx;
      smallestIdx =
        this.pq[left] && this.pq[left][1] < this.pq[smallestIdx][1]
          ? left
          : smallestIdx;
      smallestIdx =
        this.pq[right] && this.pq[right][1] < this.pq[smallestIdx][1]
          ? right
          : smallestIdx;
      if (idx != smallestIdx) {
        [this.pq[idx], this.pq[smallestIdx]] = [
          this.pq[smallestIdx],
          this.pq[idx],
        ];
        idx = smallestIdx;
      } else {
        break;
      }
    }
    return result;
  }
  length() {
    return this.pq.length;
  }
}

const costTable = Array(n + 1)
  .fill()
  .map((val) => Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
  costTable[i][i] = 0;
}

const dijkstra = (idx, x) => {
  const isVisited = Array(n + 1).fill(false);
  const pq = new priorityQueue();
  pq.push([idx, 0]);

  while (pq.length() > 0) {
    const [samllestNode, samllestNodeCost] = pq.pop();
    isVisited[samllestNode] = true;
    for (const edge of adjacentNodeList[samllestNode]) {
      const [node, cost] = edge;
      if (
        isVisited[node] === false &&
        samllestNodeCost + cost < costTable[idx][node]
      ) {
        costTable[idx][node] = samllestNodeCost + cost;
        pq.push([node, samllestNodeCost + cost]);
      }
    }
  }
  return costTable[idx][x];
};

// console.log(costTable);
result = 0;
for (let i = 1; i <= n; i++) {
  result = Math.max(result, dijkstra(i, x) + dijkstra(x, i));
}
console.log(result);
