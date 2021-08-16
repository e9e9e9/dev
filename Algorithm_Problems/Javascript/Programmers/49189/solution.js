function solution(n, edges) {
    const vertexes = new Array(n + 1).fill().map(_ => new Array())
    const isVisited = new Array(n + 1).fill(false);
    const dist = new Array(n + 1).fill(0);
    const queue = [1];
    isVisited[1] = true;
    
    for (const edge of edges) {
        vertexes[edge[0]].push(edge[1]);
        vertexes[edge[1]].push(edge[0]);
    }
    
    // console.log(vertexes);
    // console.log(isVisited);
    // console.log(queue.length);

    while(queue.length > 0) {
        const visited = queue.shift();

        for (const vertex of vertexes[visited]) {
            if (isVisited[vertex] === false) {
                queue.push(vertex);
                dist[vertex] = dist[visited] + 1;
                isVisited[vertex] = true;
            }
        }
    }
    // console.log(dist);
    const maxVal = Math.max(...dist);

    // console.log(dist.filter((el) => el === maxVal).length);
    return dist.filter((el) => el === maxVal).length; 
}

solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	)