function solution(answers) {
    const answer = [];
    const cnt = [0, 0, 0];
    const candi_1 = [1,2,3,4,5];
    const candi_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const candi_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5 , 5];
    
    for (const [idx, answer] of answers.entries()) {
        const candi_1_idx = idx % candi_1.length;
        const candi_2_idx = idx % candi_2.length; 
        const candi_3_idx = idx % candi_3.length;
        
        if (candi_1[candi_1_idx] === answer) {
            cnt[0] += 1;
        }
        if (candi_2[candi_2_idx] === answer) {
            cnt[1] += 1;
        }
        if (candi_3[candi_3_idx] === answer) {
            cnt[2] += 1;
        }
    }
    const maxCnt = Math.max(...cnt);

    for (const idx in cnt) {
        if (cnt[idx] === maxCnt) {
            answer.push(Number(idx) + 1);
        }
    }
    
    return answer;
}