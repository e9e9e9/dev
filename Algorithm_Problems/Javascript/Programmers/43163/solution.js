function solution(begin, target, words) {
    let answer = 987654321;
    words = [begin, ...words];
    const connectedMatrix = [];
    
    for (const [idx, word] of words.entries()) {
        const connected = []
        for (const [comp_idx, comp] of words.entries()) {
            if (idx === comp_idx) {
                connected.push(false);
                continue;
            }
            let matchedCnt = 0;
            for (let i = 0; i < word.length; i++) {
                if (word[i] === comp[i]) {
                    matchedCnt += 1;
                }
            }
            matchedCnt === word.length -1 ? connected.push(true) : connected.push(false);
        }
        connectedMatrix.push(connected);
    }
    
    const dfs = (to_idx, visited) => {
        visited = [...visited];
        visited.push(to_idx);
        if (words[to_idx] === target) {
            answer = Math.min(answer, visited.length);
            return;
        }
        if (visited.length === words.length) {
            return;
        }
        
        for (const [idx, connected] of connectedMatrix[to_idx].entries()) {
            if (!visited.includes(idx) && connected) {
                dfs(idx, visited);
            }
        }
    }
    
    dfs(0, []);
    return answer === 987654321 ? 0 : answer - 1;
}