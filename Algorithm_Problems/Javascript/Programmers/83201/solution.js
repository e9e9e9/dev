function solution(scores) {
    let answer = '';
    const sumScores = new Array(scores.length).fill().map(el => []);
    for (const score of scores)
        for (const [idx, stuScore] of score.entries())
            sumScores[idx].push(stuScore);
    
    console.log(sumScores);
    for (const [stuId, score] of sumScores.entries()) {  
        const maxScore = Math.max(...score);
        const minScore = Math.min(...score);
        
        let maxCnt = 0;
        let minCnt = 0;
        let isIgnoreCandi = false;
        for (const [idx, eachScore] of score.entries()) {
            console.log(idx, eachScore);
            if (eachScore === maxScore) {
                maxCnt++;
                if (idx === stuId) {
                    isIgnoreCandi = true;
                }
            }
            if (eachScore === minScore) {
                minCnt++;
                if (idx === stuId) {
                    isIgnoreCandi = true;
                }
            }
        }

        if (isIgnoreCandi && (maxCnt === 1 || minCnt === 1)) {
            score.splice(stuId, 1);
        }
        
        console.log(isIgnoreCandi, maxCnt, minCnt, score);
        const mean = score.reduce((acc, curr) => acc + curr, 0) / score.length;
        console.log(mean);
        const grade = (mean => {
            if (mean >= 90) return 'A';
            if (mean >= 80) return 'B';
            if (mean >= 70) return 'C';
            if (mean >= 50) return 'D';
            return 'F';
        })(mean);
        answer += grade;
    }
    console.log(answer);
    return answer;
}

solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]);