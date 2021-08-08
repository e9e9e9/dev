function solution(n, computers) {
    let answer = 0;
    const found = new Array(n).fill(false);
    
    for (const [idx, computer] of computers.entries()) {
        if (found[idx]) {
            continue;
        }
        found[idx] = true;
        answer += 1;
        const q = [computer];
        
        while(q.length > 0) {
            const targetComputer = q.shift();
            for (const [targetComputerIdx, connected] of targetComputer.entries()) {
                if (targetComputerIdx != idx && !found[targetComputerIdx] && connected === 1) {
                    found[targetComputerIdx] = true;
                    q.push(computers[targetComputerIdx]);
                }
            }
        }
    }
    
    return answer;
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]	);