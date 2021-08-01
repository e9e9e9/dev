function solution(citations) {
    var answer = 0;
    
    for (let i = 0; i < 10000; i++) {
        let cnt_above = 0;
        for (const c of citations) {
            if (c >= i) {
                cnt_above += 1;
            }
        }
        if (cnt_above >= i && citations.length - cnt_above <= i) {
            answer = Math.max(answer, i);
        }
    }
    
    return answer;
}