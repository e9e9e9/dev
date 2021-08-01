function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    
    for (const [idx, val] of citations.entries()) {
        if (idx + 1 > val) {
            break;
        }
        answer += 1;
    }
    return answer;
}