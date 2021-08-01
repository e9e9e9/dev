function solution(progresses, speeds) {
    var answer = [];
    let targetDay = 0;
    let cnt = 0;
    const days = progresses.map((progress, idx) => 
                                (parseInt((100 - progress) / speeds[idx]) + ((100 - progress) % speeds[idx] === 0 ? 0 : 1)));
    
    for (const [idx, day] of days.entries()) {
        if (idx === 0) {
            targetDay = day;
            cnt += 1;
        } else {
            if (day <= targetDay) {
                cnt += 1;
            } else {
                answer.push(cnt);
                targetDay = day;
                cnt = 1;
            }
        }
        
        if (idx === days.length - 1) {
            answer.push(cnt);
        }
    }
    return answer;
}