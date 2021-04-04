/*
Dijkstrat Shortest path Algorithm : 출발 노드에서 각 노드까지의 최소 비용을 구하는 알고리즘

동작
    1. 출발 노드 설정
    2. 최단 거리 테이블 초기화
    3. 방문하지 않은 노드 중 최단 거리가 가장 짧은 노드 선택
    4. 해당 노드를 거쳐 가는 비용을 비교하여 최단 거리 테이블 갱신
    5. 3, 4번 과정 반복

필요 자료
    - 방문 여부 리스트
    - 최단 거리 리스트
    - 최단 거리 노드 확인 function
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

// graph 생성
const graph = [
    [],
    [[2, 4], [4, 2], [5, 1]],
    [[1, 4,], [3, 2]],
    [[2, 2], [5, 1]],
    [[1, 2]],
    [[1, 1], [3, 1]]
]

// 거리, 방문 여부 확인 리스트 생성
const visitedList = Array(graph.length).fill(false);
const distanceList = Array(graph.length).fill(INF);

// 최단 거리 노드 확인
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

    // distanceList의 크기 만큼 반복해서 확인
    for (i in distanceList) {
        //최단 거리 노트 가져오기
        const smallestCostNode = getSmallestCostNode();
        // 방문 처리
        visitedList[smallestCostNode] = true;

        for (edge of graph[smallestCostNode]) {
            const adjacentNode = edge[0];
            const dist = edge[1];
            console.log(`smallestNode : ${smallestCostNode}, adjacentNode : ${adjacentNode}, dist : ${dist}, distanceList[adjacentNode] : ${distanceList[adjacentNode]}`)
            
            // 인접 노드 거리 갱신
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
