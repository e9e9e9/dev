// kruskal's algorithm
/*
1. 간선 데이터를 오름차순으로 정렬
2. 간선을 추가하며 싸이클이 발생하는지 확인
    2-1 싸이클이 발생하면 추가 X
    2-2 발생하지 않으면 추가
3. 2번 과정 반복
*/
/* graph
           5    - (6)    -    6
        /     \              /
     (1)        (1)       (4)  
    /               \     /
  1 -(4) - 2 - (2)  - 3
    \                /
     (4)          (1)
          \      /
             4
*/

// edge => [from, to, cost]
const edges = [
    [1, 5, 1],
    [1, 2, 4],
    [1, 4, 4],
    [2, 3, 2],
    [3, 4, 1],
    [3, 5, 1],
    [3, 6, 4],
    [5, 6, 6]
]
const maxNode = 6;

function findParent(parents, target) {
    if (parents[target] !== target) {
        parents[target] = findParent(parents, parents[target]);
    }
    return parents[target];
}

function union(parents, firstTarget, secondTarget) {
    const firstParent = findParent(parents, firstTarget);
    const secondParent = findParent(parents, secondTarget);

    if (firstParent < secondParent) {
        parents[secondTarget] = firstParent; 
    } else {
        parents[firstTarget] = secondParent;
    }
}

// Step 1. ascending order by cost
// minus => first move to forward
// 0 => keeps position each other
// plus => second move to forward
edges.sort((first, second) => first[2] - second[2]);

const parents = Array.from(Array(maxNode + 1).keys());
totalCost = 0;

for (edge of edges) {
    // Step 2. Check that it is cycle.
    if (findParent(parents, edge[0]) === findParent(parents, edge[1])) {
        continue;
    }
    union(parents, edge[0], edge[1]);
    console.log(`Add path : ${edge[0]} - ${edge[1]}, cost : ${edge[2]}`);
    totalCost += edge[2];
}

console.log(totalCost);