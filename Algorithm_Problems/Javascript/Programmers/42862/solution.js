function solution(n, lost, reserve) {
    let lostIdx = 0;
    let reserveIdx = 0;
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    const removedLostIdx = [];
    const removedReserveIdx = [];
    
    for (const [lost_idx, lost_stu] of lost.entries()) {
        for (const [reserve_idx, reserve_stu] of reserve.entries()) {
            if (lost_stu === reserve_stu) {
                removedLostIdx.push(lost_idx);
                removedReserveIdx.push(reserve_idx);
            }
        }
    }
    
    lost = lost.filter((el, idx) => !removedLostIdx.includes(idx));
    reserve = reserve.filter((el, idx) => !removedReserveIdx.includes(idx));
    
    let answer = n - lost.length;
<<<<<<< HEAD
=======
    
>>>>>>> e6befa5f33b6d10745c03ab1febc7fec4e4985ef
    while(reserveIdx < reserve.length && lostIdx < lost.length) {
        if (lost[lostIdx] == reserve[reserveIdx] + 1 || 
            lost[lostIdx] == reserve[reserveIdx] - 1) {
            answer++;
            lostIdx++;
            reserveIdx++;
        } else if (lost[lostIdx] < reserve[reserveIdx] - 1) {
            lostIdx++;
        } else if (lost[lostIdx] > reserve[reserveIdx] + 1) {
            reserveIdx++;
        }
    }
    return answer;
}