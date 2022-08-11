// node cnt is 5
/* graph
      5
    /    \ 
  1   -    2  - 3
    \
      4
*/

const visited = Array(6).fill(false);
const graph = [
    [],
    [2, 4, 5],
    [1, 3, 5],
    [2],
    [1],
    [1, 2]
  ];

function bfs(currNode, visited) {
    const queue = [];
    queue.push(currNode);
    visited[currNode] = true;

    while (queue.length > 0) {
        currNode = queue.shift();
        console.log(`${currNode} `);

        for (node of graph[currNode]) {
            if (visited[node] !== true) {
                queue.push(node);
                visited[node] = true;
            }
        }
    }
}

bfs(1, visited);