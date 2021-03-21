const INF = 987654321;
const graph = Array.from(Array(4), () => Array());

graph[1].push([2, 5]) // weight is 5 to node2
graph[1].push([3, 10]) // weight is 10 to node3

graph[2].push([1, 5]) // weight is 5 to node1

graph[3].push([1, 10]) // weight is 10 to node3

console.log(graph);