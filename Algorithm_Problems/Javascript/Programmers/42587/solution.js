function solution(priorities, location) {
    const modified = priorities.map((el, idx) => [el, idx]);
    let answer = 0;
    
    while (true) {
        const maxVal = modified.reduce((acc,curr) => Math.max(acc, curr[0]),0);
        if (maxVal === modified[0][0] && location === modified[0][1]) {
            answer += 1;
            break;
        }
        
        if (maxVal === modified[0][0]) {
            answer += 1;
        } else {
            modified.push(modified[0])
        }
        modified.shift();
    }
    return answer;
}