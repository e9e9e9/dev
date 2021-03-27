/*
Dijkstrat Shortest path Algorithm : 출발 노드에서 각 노드까지의 최소 비용을 구하는 알고리즘

1. 출발 노드 설정
2. 최단 거리 테이블 초기화
3. 방문하지 않은 노드 중 최단 거리가 가장 짧은 노드 선택
4. 해당 노드를 거쳐 가는 비용을 비교하여 최단 거리 테이블 갱신
5. 3, 4번 과정 반복
*/

/* graph
           5
        /     \ 
     (1)        (1)
    /               \
  1 -(4) - 2 - (2)  - 3
    \
     (2)
        \
         4
*/
const INF = Math.pow(10, 9);
const graph = [
    [],
    [[2, 4], [4, 2], [5, 1]],
    [[1, 4,], [3, 2]],
    [[2, 2], [5, 1]],
    [[1, 2]],
    [[1, 1], [3, 1]]
]

const visitedList = Array(graph.length).fill(false);
const distanceList = Array(graph.length).fill(INF);

function getSmallestCostNode() {
    let minValue = INF;
    let nodeIdx = 0;
    
    for ([idx, distance] of distanceList.entries()) {
        if (distance < minValue && visitedList[idx] === false) {
            minValue = distance;
            nodeIdx = idx;
        }
    }
    return nodeIdx;
}

function dijkstra(startNode) {
    distanceList[startNode] = 0;
    visitedList[startNode] = true;

    // 시작 노드 초기화
    for (edge of graph[startNode]) {
        const adjacentNode = edge[0];
        const dist = edge[1];
        distanceList[adjacentNode] = dist;
    }

    for (i in distanceList) {
        const smallestCostNode = getSmallestCostNode();
        visitedList[smallestCostNode] = true;

        for (edge of graph[smallestCostNode]) {
            const adjacentNode = edge[0];
            const dist = edge[1];
            console.log(`smallestNode : ${smallestCostNode}, adjacentNode : ${adjacentNode}, dist : ${dist}, distanceList[adjacentNode] : ${distanceList[adjacentNode]}`)
            distanceList[adjacentNode] = Math.min(distanceList[smallestCostNode] + dist, distanceList[adjacentNode]);
        }
    }
    for ([idx, dist] of distanceList.entries()) {
        console.log(`idx : ${idx} dist : ${dist === INF ? 'INF' : dist}`)
    }
}

dijkstra(1);
// dijkstra(2);
// dijkstra(3);
// dijkstra(4);
// dijkstra(5);
