function solution(numbers, target) {
    let answer = 0;
    const getCnt = (idx, sum) => {
        if (idx === numbers.length) {
            if (sum === target) {
                answer += 1;
            }
            return;
        }
        
        getCnt(idx + 1, sum + numbers[idx]);
        getCnt(idx + 1, sum - numbers[idx]);
    }
    
    getCnt(0, 0);
    return answer;
}