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
class BinaryHeap {
    constructor() {
      this.values = [];
    }

    swap(idx1, idx2) {
        const tempVal = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = tempVal;
    }

    push(val) {
        this.values.push(val);
        let currIdx = this.values.length - 1;
        let currVal = this.values[currIdx];

        while(currIdx > 0) {
            const parentIdx = Math.floor((currIdx - 1) / 2); 
            const parentVal =  this.values[parentIdx];

            // value -> [nodeName, distance]
            if (currVal[1] < parentVal[1]) {
                this.swap(currIdx, parentIdx);
                currIdx = parentIdx;
            } else {
                break;
            }
        }
        this.printHeap();
    }

    pop() {
        const popValue = this.values[0];
        const rootValue = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = rootValue;
            let currIdx = 0;
            let currVal = this.values[currIdx];
    
            while(currIdx < this.values.length) {
                currVal = this.values[currIdx];
                let leftIdx = (2 * currIdx) + 1;
                let leftVal = this.values[leftIdx];
                let rightIdx = (2 * currIdx) + 2;
                let rightVal = this.values[rightIdx];
                
                // value -> [nodeName, distance]
                if (leftVal && leftVal[1] < currVal[1]) {
                    this.swap(leftIdx, currIdx);
                    currIdx = leftIdx;
                } else if (rightVal && rightVal[1] < currVal[1]) {
                    this.swap(rightIdx, currIdx);
                    currIdx = rightIdx;
                } else {
                    break;
                }
            }
        }
        return popValue;
    }
    
    printHeap() {
        console.log(`this.values : ${this.values} , this.values.length = ${this.values.length}`);
    }
}

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
// O(N)의 시간을 소모하는 대신 Heap을 사용하여 O(logN) 시간으로 단축
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
    const bh = new BinaryHeap();

    // visitedList 사용 불필요
    // visitedList[startNode] = true;

    // 시작 노드 초기화 불필요
    // for (edge of graph[startNode]) {
    //     const adjacentNode = edge[0];
    //     const dist = edge[1];
    //     distanceList[adjacentNode] = dist;
    // }

    bh.push([startNode, 0]);

    while(bh.values.length > 0) {
        const smallestCostNode = bh.pop();

        for (edge of graph[smallestCostNode[0]]) {
            const adjacentNode = edge[0];
            const dist = edge[1];
            console.log(`smallestNode : ${smallestCostNode}, adjacentNode : ${adjacentNode}, dist : ${dist}, distanceList[adjacentNode] : ${distanceList[adjacentNode]}`)
            
            // 인접 노드 거리 갱신
            if (distanceList[smallestCostNode[0]] + dist < distanceList[adjacentNode]) {
                distanceList[adjacentNode] = distanceList[smallestCostNode[0]] + dist;
                bh.push([adjacentNode, dist]);
            }
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
