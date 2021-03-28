/*
1. 루트 노드 확인
    1-1. 루트 노트가 같으면 싸이클
    1-2. 루트 노트가 다르면 루트노드 설정
2. 모든 간선([v1, v2]) 대해 수행
*/

/* graph 1
      5 - 2
    /    
  1 
    \             
      4  - 7 
*/

/* graph 2
      5 
    /   \ 
  1      2
    \      \        
      4  - 7 
*/
const edgesOfGraph1 = [
    [1, 5],
    [5, 2],
    [4, 1],
    [4, 7],
];

const edgesOfGraph2 = [
    [1, 5],
    [5, 2],
    [4, 1],
    [4, 7],
    [2, 7],
];

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

function decideCycle(edges) {
    let isCycle = false;
    const maxNode = edges.reduce((acc, curr) =>
        typeof acc === "object"
            ? Math.max(Math.max(acc[0], acc[1]), Math.max(curr[0], curr[1]))
            : Math.max(acc, Math.max(curr[0], curr[1]))
    );
    const parents = Array.from(Array(maxNode + 1).keys());

    for (edge of edges) {
        if (findParent(parents, edge[0]) === findParent(parents, edge[1])) {
            isCycle = true;
            break;
        } else {
            union(parents, edge[0], edge[1]);
        }
    }
    return isCycle;
}

console.log(decideCycle(edgesOfGraph1));
console.log(decideCycle(edgesOfGraph2));
