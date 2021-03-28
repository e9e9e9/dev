/*
위상정렬
    중요 개념
        - Indegree : 노드로 들어오는 간선 수
        - outdegree : 노드에서 나가는 간선 수
    방법
        1. 진입차수가 0인 노드를 큐에 넣는다
        2. 큐에서 노드를 제거하고 outdegree 제거
        3. 1, 2 과정 반복
    필요 자료
        - algorith 진행을 위한 Queue
        - 결과 저장 list
        - node to node 표현 2d table
        - indegree 수 표현 list
*/

/* graph
      5
    ➚     ↘︎ 
  1   ->    2  -> 3
    ⬊     ⬈
      4
*/

const queue = [];
const result = [];
const nodeList = Array.from(Array(6), () => []);
const indegrees = Array(6).fill(0);

const edges = [
    [1, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [4, 2],
    [5, 2],
];

// initialize indegree list
for (edge of edges) {
    nodeList[edge[0]].push(edge[1]);
    indegrees[edge[1]] += 1;
}

// initialize graph
for ([idx, indegree] of indegrees.entries()) {
    if (idx !== 0 && indegree === 0) {
        queue.push(idx);
    }
}

// run algorithm
while(queue.length > 0) {
    
    const target = queue.shift();
    result.push(target);
    for (node of nodeList[target]) {
        // Step 2. Remove outdegree of target node
        indegrees[node] -= 1;
        // Step 1. Push node that indegree is 0
        if (indegrees[node] === 0) {
            queue.push(node);
        }
    }
}

console.log(result);

