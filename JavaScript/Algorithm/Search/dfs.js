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

function dfs(graph, currNode, visited) {
    visited[currNode] = true;
    
    console.log(`${currNode} `);

    for (node of graph[currNode]) {
        if (visited[node] !== true) {
            dfs(graph, node, visited);
        }
    }
}

dfs(graph, 1, visited);